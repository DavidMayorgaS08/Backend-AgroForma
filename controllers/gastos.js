import Gastos from "../models/gastos.js";

const gastosControllers = {
    // Listar todos los gastos
    async getGastos(req, res) {
        try {
            const gastos = await Gastos.find();
            res.json(gastos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar gasto por id
    async getGasto(req, res) {
        try {
            const gastos = await Gastos.findById(req.params.id);
            res.json(gastos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear gasto
    async postGasto(req, res) {
        try {
            const gastos = Gastos.create(req.body);
            res.json(gastos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar gasto
    async putGasto(req, res) {
        try {
            const gastos = await Gastos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(gastos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default gastosControllers;