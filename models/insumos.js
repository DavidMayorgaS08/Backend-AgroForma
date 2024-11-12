import mongoose from "mongoose";

const insumosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Nombre: { type: String, required: true },
    Tipo_insumo: { type: String, required: true },
    Fecha_expiracion: { type: Date, required: true },
    Id_proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedores', required: true },
    Registro_ICA: { type: String, required: true },
    Registro_Invima: { type: String, required: true },
    Cantidad: { type: Number, required: true },
    Unidad: { type: String, required: true },
    Observaciones: { type: String },
    Estado: { type: String, enum: ['Disponible', 'Reservado', 'Agotado'], required: true },
    Historial_modificacion: []
});

export default mongoose.model('Insumos', insumosSchema);