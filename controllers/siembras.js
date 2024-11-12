import Siembras from "../models/siembras.js";

const siembrasControllers = {
    async getSiembras(req, res) {
        try {
            const siembras = await Siembras.find();
            res.json(siembras);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }, 

    async getSiembra(req, res) {
        try {
            const siembras = await Siembras.findById(req.params.id);
            res.json(siembras);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },

    async postSiembra(req, res) {
        try {
            const siembras = Siembras.create(req.body);
            res.json(siembras);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },

    async putSiembra(req, res) {
        try {
            const siembras = await Siembras.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(siembras);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default siembrasControllers;