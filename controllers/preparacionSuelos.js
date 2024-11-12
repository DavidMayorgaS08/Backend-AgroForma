import PreparacionSuelos from "../models/preparacionSuelos.js";

const preparacionSuelosControllers = {
    async getPreparacionSuelos(req, res) {
        try {
            const preparacionSuelos = await PreparacionSuelos.find();
            res.json(preparacionSuelos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },

    async getPreparacionSuelo(req, res) {
        try {
            const preparacionSuelos = await PreparacionSuelos.findById(req.params.id);
            res.json(preparacionSuelos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },

    async postPreparacionSuelo(req, res) {
        try {
            const preparacionSuelo = PreparacionSuelos.create(req.body);
            res.json(preparacionSuelo);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },

    async putPreparacionSuelo(req, res) {
        try {
            const preparacionSuelo = await PreparacionSuelos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(preparacionSuelo);
            } catch (error) {
                res.status(500).json({
                    message: error.message
                });
            }
        }
};

export default preparacionSuelosControllers;