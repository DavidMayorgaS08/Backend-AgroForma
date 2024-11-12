import mongoose from "mongoose";

const gastosSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Fecha: { type: Date, required: true },
    Monto: { type: Number, required: true },
    Descripcion: { type: String, required: true },
    Responsable: { type: String, required: true },
    Metodo_pago: { type: String, required: true },
    Historial_modificacion: []
});

export default mongoose.model('Gastos', gastosSchema);