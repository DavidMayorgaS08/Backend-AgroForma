import mongoose from 'mongoose';

const semillasSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Nombre: { type: String, required: true },
    Registro_ICA: { type: String, required: true },
    Registro_Invima: { type: String, required: true },
    Fecha_vencimiento: { type: Date, required: true },
    Especie_variedad: { type: String, required: true },
    NroLote: { type: String, required: true },
    Origen: { type: String, required: true },
    Poder_germinativo: { type: Number, required: true },
    Observaciones: { type: String, required: true },
    Cantidad: { type: Number, required: true },
    Condiciones_almacenamiento: { type: String, required: true },
    Metodo_almacenamiento: { type: String, required: true },
    Historial_modificacion: []
});

export default mongoose.model('Semillas', semillasSchema);