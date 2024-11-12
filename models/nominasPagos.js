import moongose from 'mongoose';

const nominasPagosSchema = new moongose.Schema({
    Id_finca: { type: moongose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Id_trabajador: { type: moongose.Schema.Types.ObjectId, ref: 'NominasTrabajadores', required: true },
    Fecha_pago: { type: Date, required: true },
    Monto_base: { type: Number, required: true },
    Bonificaciones: { type: Number, default: 0 },
    Motivo_bonificaciones: { type: String, default: '' },
    Descuentos: { type: Number, default: 0 },
    Motivo_descuentos: { type: String, default: '' },
    Impuestos: { type: Number, default: 0 },
    Motivo_impuestos: { type: String, default: '' },
    Monto_total: { type: Number, required: true },
    Historial_modificacion: []
});

export default moongose.model('NominasPagos', nominasPagosSchema);