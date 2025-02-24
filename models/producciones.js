import mongoose from "mongoose";

const produccionesSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Id_cultivo: { type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true },
    Fecha: { type: Date, required: true },
    NroLote: { type: String, required: true },
    Especie: { type: String, required: true },
    Cantidad: { type: Number, required: true },
    Unidad: { type: String, required: true },
    Cantidad_trabajadores: { type: Number, required: true },
    Observaciones: { type: String },
    Estado_produccion: { type: String, enum: ['En curso', 'Completado', 'Cancelado'], required: true },
    Calidad_produccion: { type: String, enum: ['Excelente', 'Buena', 'Regular', 'Mala'], required: true },
    Historial_modificacion: []
});

export default mongoose.model('Producciones', produccionesSchema);