import mongoose from "mongoose";

const cultivosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Nombre: { type: String, required: true },
    Tipo: { type: String, required: true },
    Id_parcela: { type: mongoose.Schema.Types.ObjectId, ref: 'Parcelas', required: true },
    Fecha_siembra: { type: Date, required: true },
    Variedad: { type: String, required: true },
    Estado: { type: String, required: true, enum: ['Sembrado', 'Creciendo', 'Cosechado', 'Abandonado'] },
    Historial_modificacion: []
});

export default mongoose.model('Cultivos', cultivosSchema);