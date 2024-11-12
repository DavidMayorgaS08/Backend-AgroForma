import Cultivos from "../models/cultivos.js";

const cultivosControllers = {
    // Listar todos los cultivos
    async getCultivos(req, res) {
        try {
            const cultivos = await Cultivos.find();
            res.json(cultivos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar cultivos por id
    async getCultivo(req, res) {
        try {
            const cultivos = await Cultivos.findById(req.params.id);
            res.json(cultivos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear cultivo
    async postCultivo(req, res) {
        try {
            const cultivo = Cultivos.create(req.body);
            res.json(cultivo);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar cultivo
    async putCultivo(req, res) {
        try {
            const cultivo = await Cultivos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(cultivo);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default cultivosControllers;