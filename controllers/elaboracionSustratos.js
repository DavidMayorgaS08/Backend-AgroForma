import ElaboracionSustratos from '../models/elaboracionSustratos.js';

const elaboracionSustratosControllers = {
    // Listar todas las elaboraciones de sustratos
    async getElaboracionSustratos(req, res) {
        try {
            const elaboracionSustratos = await ElaboracionSustratos.find();
            res.json(elaboracionSustratos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar elaboracion de sustratos por id
    async getElaboracionSustrato(req, res) {
        try {
            const elaboracionSustratos = await ElaboracionSustratos.findById(req.params.id);
            res.json(elaboracionSustratos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear elaboracion de sustratos
    async postElaboracionSustrato(req, res) {
        try {
            const elaboracionSustratos = ElaboracionSustratos.create(req.body);
            res.json(elaboracionSustratos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar elaboracion de sustratos
    async putElaboracionSustrato(req, res) {
        try {
            const elaboracionSustratos = await ElaboracionSustratos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(elaboracionSustratos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default elaboracionSustratosControllers;