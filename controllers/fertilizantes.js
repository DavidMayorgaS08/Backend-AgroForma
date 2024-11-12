import Fertilizantes from '../models/fertilizantes.js';

const fertilizantesControllers = {
    // Listar todos los fertilizantes
    async getFertilizantes(req, res) {
        try {
            const fertilizantes = await Fertilizantes.find();
            res.json(fertilizantes);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar fertilizante por id
    async getFertilizante(req, res) {
        try {
            const fertilizantes = await Fertilizantes.findById(req.params.id);
            res.json(fertilizantes);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear fertilizante
    async postFertilizante(req, res) {
        try {
            const fertilizantes = Fertilizantes.create(req.body);
            res.json(fertilizantes);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar fertilizante
    async putFertilizante(req, res) {
        try {
            const fertilizantes = await Fertilizantes.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(fertilizantes);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default fertilizantesControllers;