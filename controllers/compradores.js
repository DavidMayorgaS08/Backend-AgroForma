import Compradores from '../models/compradores.js';

const compradoresControllers = {
    // Listar todos los compradores
    async getCompradores(req, res) {
        try {
            const compradores = await Compradores.find();
            res.json(compradores);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar compradores por id
    async getComprador(req, res) {
        try {
            const compradores = await Compradores.findById(req.params.id);
            res.json(compradores);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear compradores
    async postComprador(req, res) {
        try {
            const comprador = Compradores.create(req.body);
            res.json(comprador);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar compradores
    async putComprador(req, res) {
        try {
            const comprador = await Compradores.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(comprador);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default compradoresControllers;