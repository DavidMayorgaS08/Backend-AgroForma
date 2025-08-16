import Climas from '../models/climas.js';

const climasControllers = {
    // Listar todos los climas
    async getClimas(req, res) {
        try {
            const climas = await Climas.find();
            res.json(climas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Crear clima
    async createClima(req, res) {
        try {
            const climas = await Climas.create(req.body);
            res.json(climas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default climasControllers;