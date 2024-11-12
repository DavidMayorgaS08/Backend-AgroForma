import mongoose from 'mongoose';

const NominasTiposLaborSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Nombre: { type: String, required: true },
    Categoria: { type: String, required: true },
    Tarifa_base: { type: Number, required: true },
    Tarifa_producto: { type: Number, required: true },
    Unidad_medida: { type: String, required: true },
    Historial_modificacion: []
});

export default mongoose.model('NominasTiposLabor', NominasTiposLaborSchema);