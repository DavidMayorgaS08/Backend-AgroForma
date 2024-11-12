import mongoose from 'mongoose';

const elaboracionSustratosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Id_cultivo: { type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true },
    Fecha: { type: Date, required: true },
    Producto_comercial: { type: String, required: true },
    Ingrediente_activo: { type: String, required: true },
    Dosis: { type: Number, required: true },
    Metodo_aplicacion: { type: String, required: true },
    Cantidad_producida: { type: Number, required: true },
    Responsable: { type: String, required: true },
    Observaciones: { type: String },
    Historial_modificacion: []
});

export default mongoose.model('ElaboracionSustratos', elaboracionSustratosSchema);