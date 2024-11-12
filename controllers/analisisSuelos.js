import AnalisisSuelos from "../models/analisisSuelos.js";

const analisisSuelosControllers = {
    // Listar todos los analisis de suelos
    async getAnalisisSuelos(req, res) {
        try {
            const analisisSuelos = await AnalisisSuelos.find();
            res.json(analisisSuelos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar analisis de suelos por id
    async getAnalisisSuelo(req, res) {
        try {
            const analisisSuelos = await AnalisisSuelos.findById(req.params.id);
            res.json(analisisSuelos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear analisis de suelos
    async postAnalisisSuelo(req, res) {
        try {
            const analisisSuelo = AnalisisSuelos.create(req.body);
            res.json(analisisSuelo);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar analisis de suelos
    async putAnalisisSuelo(req, res) {
        try {
            const analisisSuelo = await AnalisisSuelos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(analisisSuelo);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default analisisSuelosControllers;