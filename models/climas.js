import mongoose from 'mongoose';

const climasSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Temperatura: { type: Number, required: true },
    Clima: { type: String, required: true },
    Fecha: { type: Date, required: true },
    Humedad: { type: Number, required: true },
    Velocidad_viento: { type: Number, required: true },
    Nubosidad: { type: Number, required: true }
});

export default mongoose.model('Climas', climasSchema);