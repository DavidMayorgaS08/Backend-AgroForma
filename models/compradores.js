import mongoose from 'mongoose';

const compradoresSchema = new mongoose.Schema({
    Id_finca: { type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true },
    Fecha: { type: Date, required: true, default: Date.now },
    Tipo_comprador: { type: String, enum: ['Natural', 'Juridica'], required: true },
    Telefono: { type: String, required: true },
    Correo: { type: String, required: true },
    Direccion: { type: String, required: true },
    Fecha_registro: { type: Date, required: true, default: Date.now },
    Datos_natural: [{
        Nombre: { type: String },
        Num_identificacion: { type: String },
        Direccion: { type: String },
        Telefono: { type: String },
        Responsable_iva: { type: String },
        Responsable_retencion_fuente: { type: String },
    }],
    Datos_juridica: [{
        Razon_social: { type: String },
        Num_identificacion: { type: String },
        Direccion: { type: String },
        Telefono: { type: String },
        Correo: { type: String },
        Representante_legal: {
            Nombre: { type: String },
            Num_identificacion: { type: String },
            Direccion: { type: String },
            Telefono: { type: String },
        },
        Responsable_iva: { type: String },
        Responsable_retencion_fuente: { type: String },
    }],
    Historial_modificacion: []
});

export default mongoose.model('Compradores', compradoresSchema);