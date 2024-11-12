import mongoose from 'mongoose';

const facturasVentasSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Tipo_factura: { type: String, required: true },
    Consecutivo: { type: Number, required: true },
    Fecha_generacion: { type: Date, default: Date.now, required: true },
    Emisor: {
        Nombre: { type: String, required: true },
        Tipo_documento: { type: String, required: true },
        Numero: { type: String, required: true },
        Direccion: { type: String, required: true },
        Telefono: { type: String, required: true },
        Correo: { type: String, required: true }
    },
    Receptor: {
        Nombre: { type: String, required: true },
        Tipo_documento: { type: String, required: true },
        Numero: { type: String, required: true },
        Direccion: { type: String, required: true },
        Telefono: { type: String, required: true },
        Correo: { type: String, required: true }
    },
    Productos: [
        {
            Tipo_cultivo: { type: String, required: true },
            Calidad: { type: String, required: true },
            Unidad_medida: { type: String, required: true },
            Cantidad: { type: Number, required: true },
            Precio_unitario: { type: Number, required: true },
            Subtotal: { type: Number, required: true }
        }
    ],
    Total: { type: Number, required: true },
    Impuesto: { type: Number, required: true },
    Total_pagar: { type: Number, required: true },
    Factura_electronica: {
        Consecutivo_dian: { type: String, required: true },
        Cufe: { type: String, required: true },
        Firma_digital: { type: String, required: true }
    },
    Metodo_pago: {
        Tipo: { type: String, required: true },
        Detalles: {
            Banco: { type: String, required: true },
            Numero_referencia: { type: String, required: true },
            Fecha_pago: { type: Date, required: true }
        }
    },
    Id_comprador: { type: mongoose.Schema.Types.ObjectId, ref: 'Compradores', required: true },
    Id_produccion: { type: mongoose.Schema.Types.ObjectId, ref: 'Producciones', required: true },
    Historial_modificacion: []
});

export default mongoose.model('FacturasVentas', facturasVentasSchema);