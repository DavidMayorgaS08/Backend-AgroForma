import Insumos from '../models/insumos.js';

const insumosControllers = {
    // Listar todos los insumos
    async getInsumos(req, res) {
        try {
            const insumos = await Insumos.find();
            res.json(insumos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar insumo por id
    async getInsumo(req, res) {
        try {
            const insumos = await Insumos.findById(req.params.id);
            res.json(insumos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear insumo
    async postInsumo(req, res) {
        try {
            const insumos = Insumos.create(req.body);
            res.json(insumos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar insumo
    async putInsumo(req, res) {
        try {
            const insumos = await Insumos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(insumos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default insumosControllers;