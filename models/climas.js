import mongoose from 'mongoose';

const climasSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Temperatura: { type: String, required: true },
    Clima: { type: String, required: true },
    Fecha: { type: Date, required: true },
    Humedad: { type: String, required: true },
    Velocidad_viento: { type: String, required: true },
    Nubosidad: { type: String, required: true }
});

export default mongoose.model('Climas', climasSchema);