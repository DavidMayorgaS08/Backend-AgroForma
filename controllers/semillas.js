import Semillas from '../models/semillas.js';

const semillasControllers = {
    // Listar todas las semillas
    async getSemillas(req, res) {
        try {
            const semillas = await Semillas.find();
            res.json(semillas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar semillas por id
    async getSemilla(req, res) {
        try {
            const semillas = await Semillas.findById(req.params.id);
            res.json(semillas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear semillas
    async postSemilla(req, res) {
        try {
            const semilla = Semillas.create(req.body);
            res.json(semilla);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar semillas
    async putSemilla(req, res) {
        try {
            const semilla = await Semillas.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(semilla);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default semillasControllers;