import mongoose from "mongoose";

const procesosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Responsable: { type: String, required: true },
    Tipo_proceso: { type: String, required: true },
    Descripcion: { type: String, required: true },
    Fecha_inicio: { type: Date, required: true },
    Fecha_fin: { type: Date, required: true },
    Historial_modificacion: []
});

export default mongoose.model('Procesos', procesosSchema);