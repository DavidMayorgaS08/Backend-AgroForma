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
            req.body.Password = bcrypt.hashSync(req.body.Password, 10);
            const usuario = await Usuarios.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(usuario);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default usuariosControllers;