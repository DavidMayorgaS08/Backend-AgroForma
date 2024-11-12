import NominasTrabajadores from '../models/nominasTrabajadores.js';

const nominasTrabajadoresControllers = {
    // Listar todos los trabajadores
    async getTrabajadores(req, res) {
        try {
            const trabajadores = await NominasTrabajadores.find();
            res.json(trabajadores);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar trabajadores por id
    async getTrabajador(req, res) {
        try {
            const trabajadores = await NominasTrabajadores.findById(req.params.id);
            res.json(trabajadores);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear trabajadores
    async postTrabajador(req, res) {
        try {
            const trabajador = NominasTrabajadores.create(req.body);
            res.json(trabajador);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar trabajadores
    async putTrabajador(req, res) {
        try {
            const trabajador = await NominasTrabajadores.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(trabajador);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default nominasTrabajadoresControllers;