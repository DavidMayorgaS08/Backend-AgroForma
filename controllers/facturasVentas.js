import FacturasVentas from "../models/facturasVentas.js";
import Insumos from "../models/insumos.js";
import Producciones from "../models/producciones.js";

import Fincas from "../models/fincas.js";
import Compradores from "../models/compradores.js";


import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { log } from "console";

const facturasVentasControllers = {
  async getFacturasVentas(req, res) {
    try {
      const facturasVentas = await FacturasVentas.find()
        .populate({
          path: "Id_finca",
        })
        .populate({
          path: "Id_Emisor",
        })
        .populate({
          path: "Id_comprador",
        });

      res.json(facturasVentas);
    } catch (error) {
      res.status(500).json({
        message: error.message,    
      });
    }
  },                   
  async getFacturaVenta(req, res) {
    try {
      const facturasVentas = await FacturasVentas.findById(req.params.id);
      res.json(facturasVentas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  async postFacturaVenta(req, res) {
    try {
      const { Productos } = req.body;

      if (!Productos || Productos.length === 0) {
        return res
          .status(400)
          .json({ message: "No hay productos en la factura." });
      }

      for (const producto of Productos) {
        const insumo = await Producciones.findById(producto.idProduccion);

        if (!insumo) {
          throw new Error(
            `Producto con id ${producto.idProduccion} no encontrado.`
          );
        }

        if (insumo.Cantidad < producto.Cantidad) {
          throw new Error(
            `Stock insuficiente para el producto: ${
              insumo.NroLote || "Desconocido"
            }.`
          );
        }

        insumo.Cantidad -= producto.Cantidad;

     

        await insumo.save();
      }

      const factura = await FacturasVentas.create(req.body);
      const pdfPath = path.join(process.cwd(), `factura_${factura._id}.pdf`);

      // Generar el PDF
      const doc = new PDFDocument({ margin: 50 });
      const writeStream = fs.createWriteStream(pdfPath);
      doc.pipe(writeStream);
      doc.font("Helvetica");
      doc
        .fontSize(24)
        .text("Factura de Venta", { align: "center" })
        .moveDown(2);
        const finca = await Fincas.findById(factura.Id_finca);
        
        if (finca) {
          factura.Fincas = finca; // Asegúrate de tener los datos completos de la finca
        } else {
          throw new Error("Finca no encontrada.");
        }
      doc
        .fontSize(16)
        .text(`Finca: ${finca.Nombre}`, { align: "left" })
        .text(`Tipo de factura: ${factura.Tipo_factura}`)
        .text(
          `Fecha: ${new Date(factura.Fecha_generacion).toLocaleDateString()}`
        )
        .text(`Método de Pago: ${factura.Metodo_pago.Tipo}`)
        .moveDown();

        if (factura.Metodo_pago.Detalles) {
            const { Banco, Numero_referencia, Fecha_pago } = factura.Metodo_pago.Detalles;
            doc.text(`Banco: ${Banco || 'N/A'}`);
            doc.text(`Referencia: ${Numero_referencia || 'N/A'}`);
            doc.text(`Fecha de pago: ${Fecha_pago ? new Date(Fecha_pago).toLocaleDateString() : 'N/A'}`);
            doc.moveDown();
        }

      // Tabla de productos
      doc.fontSize(18).text('Productos:', { underline: true }).moveDown(0.5);
      Productos.forEach((p, index) => {
          doc.fontSize(14).text(
              `${index + 1}. ${p.Tipo_cultivo} - ${p.Unidad_medida} - Cantidad: ${p.Cantidad} - $${p.Precio_unitario} c/u`,
              { align: 'left' }
          );
          doc.moveDown(0.3);
      });

      doc.moveDown();
      doc
        .fontSize(16)
        .text(`Subtotal: $${factura.Total}`, { align: "right" })
        .text(`Impuesto: $${factura.Impuesto}`, { align: "right" })
        .text(`Total a pagar: $${factura.Total_pagar}`, { align: "right" });

      doc.end();

      await new Promise((resolve, reject) => {
        writeStream.on("finish", resolve);
        writeStream.on("error", reject);
      });

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "equipodeagronomiasoftware@gmail.com",
          pass: "ouneurtkzscoxgks",
        },
      });
console.log(factura);


      const cliente = await Compradores.findById(factura.Id_comprador); 

      if (!cliente) {
        throw new Error("Cliente no encontrado.");
      }
    
      const clienteEmail = cliente.Correo; // Asegúrate de que el campo de email se llame 'Email'
    
      if (!clienteEmail) {
        throw new Error("El correo del cliente no está disponible.");
      }
      const mailOptions = {
        from: "samuelmejiaz2005@gmail.com",
        to: clienteEmail,
        subject: "Confirmación de Factura",
        html: `
                    <h1>📄 Factura creada con éxito</h1>
                    <p><strong>Finca:</strong> ${finca.Nombre}</p>
                    <p><strong>Tipo de Factura:</strong> ${
                      factura.Tipo_factura
                    }</p>
                    <p><strong>Total a pagar:</strong> $${
                      factura.Total_pagar
                    }</p>
                    <h3>🛒 Productos:</h3>
                    <ul>
                        ${Productos.map(
                          (p) => `
                            <li>${p.Tipo_cultivo} - ${p.Cantidad} ${p.Unidad_medida} - $${p.Precio_unitario} c/u</li>
                        `
                        ).join("")}
                    </ul>
                `,
        attachments: [
          {
            filename: `factura_${factura._id}.pdf`,
            path: pdfPath,
          },
        ],
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);
      console.log("📧 Correo enviado con el PDF adjunto.");

      // Eliminar el PDF temporal
      fs.unlinkSync(pdfPath);

      // Respuesta exitosa
      res.status(201).json({
        message: "Factura creada, stock actualizado y correo con PDF enviado.",
        factura,
      });
    } catch (error) {
      console.error("❌ Error al crear la factura o enviar el correo:", error);
      res.status(500).json({ message: error.message });
    }
  },

  async putFacturaVenta(req, res) {
    try {
      const facturasVentas = await FacturasVentas.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(facturasVentas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

export default facturasVentasControllers;
