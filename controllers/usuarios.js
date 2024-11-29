import Usuarios from '../models/usuarios.js';
import bcrypt from 'bcryptjs';

const usuariosControllers = {
    // Listar todos los usuarios
    async getUsuarios(req, res) {
        try {
            const usuarios = await Usuarios.find();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar usuarios por id
    async getUsuario(req, res) {
        try {
            const usuarios = await Usuarios.findById(req.params.id);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear usuarios
    async postUsuario(req, res) {
        try {
            req.body.Password = bcrypt.hashSync(req.body.Password, 10);
            const usuario = Usuarios.create(req.body);
            res.json(usuario);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar usuarios
    async putUsuario(req, res) {
        try {
            const usuarioActual = await Usuarios.findById(req.params.id);
            if (!usuarioActual) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
    
            if (req.body.Password && req.body.Password !== usuarioActual.Password) {
                req.body.Password = bcrypt.hashSync(req.body.Password, 10);
            } else {
                req.body.Password = usuarioActual.Password;
            }
    
            const usuarioActualizado = await Usuarios.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(usuarioActualizado);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default usuariosControllers;