import mongoose from "mongoose";

const fincasSchema = new mongoose.Schema({
    Nombre: { type: String, required: true },
    Propietario: { type: String, required: true },
    Tipo_finca: { type: String, required: true },
    Rut: { type: String, required: true },
    Ubicacion: { type: String, required: true },
    Area: { type: Number, required: true }
});

export default mongoose.model('Fincas', fincasSchema);