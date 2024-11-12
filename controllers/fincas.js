import Fincas from "../models/fincas.js";

const fincasControllers = {
    // Listar todas las fincas
    async getFincas(req, res) {
        try {
            const fincas = await Fincas.find();
            res.json(fincas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar fincas por id
    async getFinca(req, res) {
        try {
            const fincas = await Fincas.findById(req.params.id);
            res.json(fincas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear finca
    async postFinca(req, res) {
        try {
            const finca = Fincas.create(req.body);
            res.json(finca);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar finca
    async putFinca(req, res) {
        try {
            const finca = await Fincas.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(finca);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Eliminar finca
    async deleteFinca(req, res) {
        try {
            const finca = await Fincas.findByIdAndDelete(req.params.id);
            res.json(finca);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default fincasControllers;