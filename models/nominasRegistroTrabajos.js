import mongoose from 'mongoose';

const nominasRegistroTrabajosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Id_trabajador: { type: mongoose.Schema.Types.ObjectId, ref: 'NominasTrabajadores', required: true },
    Fecha: { type: Date, required: true },
    Hora_inicio: { type: String, required: true },
    Hora_fin: { type: String, required: true },
    Tiempo_total: { type: Number, required: true },
    Id_parcela: { type: mongoose.Schema.Types.ObjectId, ref: 'Parcelas', required: true },
    Id_tipoLabor: { type: mongoose.Schema.Types.ObjectId, ref: 'NominasTiposLabor', required: true },
    Cantidad_recogida: { type: Number, required: true },
    Historial_modificacion: []
});

export default mongoose.model('NominasRegistroTrabajos', nominasRegistroTrabajosSchema);