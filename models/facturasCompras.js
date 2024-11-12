import moongose from 'mongoose';

const facturasComprasSchema = new moongose.Schema({
    Id_finca: { type: moongose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Fecha_factura: { type: Date, required: true, default: Date.now },
    Id_proveedor: { type: moongose.Schema.Types.ObjectId, ref: 'Proveedores', required: true },
    Detalle_compra: [
        {
            Nombre_producto: { type: String, required: true },
            Tipo_producto: { type: String, required: true },
            Cantidad: { type: Number, required: true },
            Precio_unitario: { type: Number, required: true },
            Subtotal: { type: Number, required: true }
        }
    ],
    Total: { type: Number, required: true },
    Impuestos: { type: Number, required: true },
    Total_pagar: { type: Number, required: true },
    Estado_pago: { type: String, required: true },
    Metodo_pago: {
        Tipo: { type: String, required: true },
        Detalles: {
            Banco: { type: String, required: true },
            Numero_referencia: { type: String, required: true },
            Fecha_pago: { type: Date, required: true }
        }
    },
    Archivo_adjunto: {
        Nombre_archivo: { type: String, required: true },
        Url: { type: String, required: true },
        Tipo_archivo: { type: String, required: true }
    },
    Historial_modificacion: []
});

export default moongose.model('FacturasCompras', facturasComprasSchema);