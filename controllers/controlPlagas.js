import ControlPlagas from '../models/controlPlagas.js';

const controlPlagasControllers = {
    // Listar todos los controles de plagas
    async getControlPlagas(req, res) {
        try {
            const controlPlagas = await ControlPlagas.find();
            res.json(controlPlagas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar control de plagas por id
    async getControlPlaga(req, res) {
        try {
            const controlPlagas = await ControlPlagas.findById(req.params.id);
            res.json(controlPlagas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear control de plagas
    async postControlPlaga(req, res) {
        try {
            const controlPlagas = ControlPlagas.create(req.body);
            res.json(controlPlagas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar control de plagas
    async putControlPlaga(req, res) {
        try {
            const controlPlagas = await ControlPlagas.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(controlPlagas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default controlPlagasControllers;