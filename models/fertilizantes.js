import mongoose from 'mongoose';

const fertilizantesSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Responsable: { type: String, required: true },
    Fecha: { type: Date, required: true },
    Estado_fenologico: { type: String, required: true },
    Aplicacion: { type: String, required: true },
    Nombre: { type: String, required: true },
    Cantidad: { type: Number, required: true },
    Id_insumo: { type: mongoose.Schema.Types.ObjectId, ref: 'Insumos', required: true },
    Tipo_fertilizante: { type: String, required: true },
    Observaciones: { type: String },
    Historial_modificacion: []
});

export default mongoose.model('Fertilizantes', fertilizantesSchema);