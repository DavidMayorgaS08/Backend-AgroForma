import Procesos from "../models/procesos.js";

const procesosControllers = {
    // Listar todos los procesos
    async getProcesos(req, res) {
        try {
            const procesos = await Procesos.find();
            res.json(procesos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar procesos por id
    async getProceso(req, res) {
        try {
            const procesos = await Procesos.findById(req.params.id);
            res.json(procesos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear procesos
    async postProceso(req, res) {
        try {
            const proceso = Procesos.create(req.body);
            res.json(proceso);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar procesos
    async putProceso(req, res) {
        try {
            const proceso = await Procesos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(proceso);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default procesosControllers;