import mongoose from 'mongoose';

const SiembrasSchema = new mongoose.Schema({
    Id_finca: {type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true},
    Id_cultivo: {type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true},
    Responsable: {type: String, required: true},
    Fecha_siembra: {type: Date, required: true},
    Fecha_cosecha: {type: Date},
    Transplante: {type: Boolean, default: false},
    Cantidad: {type: Number, required: true},
    Id_semillas: {type: mongoose.Schema.Types.ObjectId, ref: 'Semillas', required: true},
    Historial_modificacion: []
});

export default mongoose.model('Siembras', SiembrasSchema);