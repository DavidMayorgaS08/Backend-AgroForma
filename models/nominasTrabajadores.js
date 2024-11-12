import mongoose from 'mongoose';

const nominasTrabajadoresSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true },
    Tipo_identificacion: { type: String, required: true },
    Numero_identificacion: { type: String, required: true },
    Telefono: { type: String, required: true },
    Direccion: { type: String, required: true },
    Metodo_pago: { type: String, required: true },
    Informacion_bancaria: { type: String, required: true },
    Historial_modificacion: []
});

export default mongoose.model('NominasTrabajadores', nominasTrabajadoresSchema);
