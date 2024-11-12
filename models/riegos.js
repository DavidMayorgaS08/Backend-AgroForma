import mongoose from 'mongoose';

const riegosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Id_cultivo: { type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true },
    Responsable: { type: String, required: true },
    Fecha: { type: Date, required: true },
    Dias_transplante: { type: Number, required: true },
    Estado_fenologico: { type: String, required: true },
    Hora_inicio: { type: String, required: true },
    Hora_fin: { type: String, required: true },
    Dosis: { type: Number, required: true },
    Cantidad_agua: { type: Number, required: true },
    Metodo_riego: { type: String, required: true },
    Observaciones: { type: String, required: false },
    Historial_modificacion: []
});

export default mongoose.model('Riegos', riegosSchema);