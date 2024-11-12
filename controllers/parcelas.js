import Parcelas from '../models/parcelas.js';

const parcelasControllers = {
    // Listar todas las parcelas
    async getParcelas(req, res) {
        try {
            const parcelas = await Parcelas.find();
            res.json(parcelas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar parcelas por id
    async getParcela(req, res) {
        try {
            const parcelas = await Parcelas.findById(req.params.id);
            res.json(parcelas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear parcelas
    async postParcela(req, res) {
        try {
            const parcela = Parcelas.create(req.body);
            res.json(parcela);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar parcelas
    async putParcela(req, res) {
        try {
            const parcela = await Parcelas.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(parcela);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default parcelasControllers;