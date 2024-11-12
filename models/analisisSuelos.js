import mongoose from "mongoose";

const analisisSuelosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Fecha: { type: Date, required: true },
    Id_parcela: { type: mongoose.Schema.Types.ObjectId, ref: 'Parcelas', required: true },
    Responsable: { type: String, required: true },
    Laboratorio: { type: String, required: true },
    Recomendaciones: { type: String, required: true },
    Muestra: { type: String, required: true },
    Resultado: [
        {
            Fosforo: { type: Number, required: true },
            Azufre: { type: Number, required: true },
            Zinc: { type: Number, required: true },
            Manganeso: { type: Number, required: true },
            Cobre: { type: Number, required: true },
            Potasio: { type: Number, required: true },
            Calcio: { type: Number, required: true },
            Magnesio: { type: Number, required: true },
            Sodio: { type: Number, required: true },
        }
    ],
    Estado: { type: String, required: true }, // Preliminar, Finalizado, Revisado
    Historial_modificaciones: []
});

export default mongoose.model('AnalisisSuelos', analisisSuelosSchema);