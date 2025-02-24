import mongoose from "mongoose";

const facturasVentasSchema = new mongoose.Schema({
  Id_finca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fincas",
    required: true,
  },
  Id_Emisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    required: true,
  },
  
  Tipo_factura: { type: String, required: true },
  Consecutivo: { type: Number, required: true },
  Fecha_generacion: { type: Date, default: Date.now, required: true },
  Productos: [
    {
      Tipo_cultivo: { type: String, required: true },
      Unidad_medida: { type: String, required: true },
      Cantidad: { type: Number, required: true },
      Precio_unitario: { type: Number, required: true },
      Subtotal: { type: Number, required: true },
    },
  ],
  Total: { type: Number, required: true },
  Impuesto: { type: Number, required: true },
  Total_pagar: { type: Number, required: true },
  Metodo_pago: {
    Tipo: { type: String, required: true },
    Detalles: {
      Banco: { type: String },
      Numero_referencia: { type: String,  },
      Fecha_pago: { type: Date },
    },
  },
  Id_comprador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Compradores",
    required: true,
  },
  Id_produccion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producciones",
    required: true,
  },
  Historial_modificacion: [],
});

export default mongoose.model("FacturasVentas", facturasVentasSchema);
