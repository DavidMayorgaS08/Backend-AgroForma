import NominasRegistroTrabajos from '../models/nominasRegistroTrabajos.js';

const nominasRegistroTrabajosControllers = {
    // Listar todos los registros de trabajos
    async getNominasRegistroTrabajos(req, res) {
        try {
            const nominasRegistroTrabajos = await NominasRegistroTrabajos.find();
            res.json(nominasRegistroTrabajos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar registro de trabajo por id
    async getNominaRegistroTrabajo(req, res) {
        try {
            const nominasRegistroTrabajos = await NominasRegistroTrabajos.findById(req.params.id);
            res.json(nominasRegistroTrabajos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear registro de trabajo
    async postNominaRegistroTrabajo(req, res) {
        try {
            const nominaRegistroTrabajo = NominasRegistroTrabajos.create(req.body);
            res.json(nominaRegistroTrabajo);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar registro de trabajo
    async putNominaRegistroTrabajo(req, res) {
        try {
            const nominaRegistroTrabajo = await NominasRegistroTrabajos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(nominaRegistroTrabajo);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default nominasRegistroTrabajosControllers;