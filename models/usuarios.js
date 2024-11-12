import moongose from 'mongoose';

const usuariosSchema = new moongose.Schema({
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true },
    Documento: { type: String, required: true, unique: true },
    Telefono: { type: String, required: true },
    Direccion: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Municipio: { type: String, required: true },
    Rol: { type: String, enum: ['adminFull', 'admin', 'trabajador'], required: true },
    Fincas: [{ type: moongose.Schema.Types.ObjectId, ref: 'Fincas' }],
    Ultima_conexion: { type: Date, default: Date.now },
    Estado: { type: String, required: true }
});

export default moongose.model('Usuarios', usuariosSchema);