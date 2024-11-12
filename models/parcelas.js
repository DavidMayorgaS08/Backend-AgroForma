import mongoose from "mongoose";

const parcelasSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Numero: { type: Number, required: true },
    Cultivo_anterior: { type: String, required: true },
    Cultivo_actual: { type: String, required: true },
    Detalles_suelo: { type: String, required: true },
    Observaciones: { type: String, required: true },
    Estado: { type: String, enum: ['En cultivo', 'Preparación', 'Abandonado'], required: true },
    Historial_modificacion: []
});

export default mongoose.model('Parcelas', parcelasSchema);