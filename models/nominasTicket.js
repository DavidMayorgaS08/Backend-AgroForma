import mongoose from 'mongoose';

const nominasTicketSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Id_pago: { type: mongoose.Schema.Types.ObjectId, ref: 'NominasPagos', required: true },
    Detalle: { type: String, required: true },
    Fecha_emision: { type: Date, default: Date.now },
    Historial_modificacion: []
});

export default mongoose.model('NominasTicket', nominasTicketSchema);