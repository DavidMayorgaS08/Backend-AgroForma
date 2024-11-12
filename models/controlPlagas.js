import mongoose from 'mongoose';

const controlPlagasSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Id_cultivo: { type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true },
    Fecha: { type: Date, required: true },
    Nombre: { type: String, required: true },
    Tipo_control: { type: String, required: true },
    Ingrediente_activo: { type: String, required: true },
    Dosis: { type: String, required: true },
    Frecuencia_aplicacion: { type: String, required: true },
    Responsable: { type: String, required: true },
    Estado: { type: String, required: true },
    Historial_modificacion: []
});

export default mongoose.model('ControlPlagas', controlPlagasSchema);