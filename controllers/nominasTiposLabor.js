import NominasTiposLabor from '../models/nominasTiposLabor.js';

const nominasTiposLaborControllers = {
    // Listar todos los tipos de labor
    async getTiposLabor(req, res) {
        try {
            const nominasTiposLabor = await NominasTiposLabor.find();
            res.json(nominasTiposLabor);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar tipos de labor por id
    async getTipoLabor(req, res) {
        try {
            const nominasTiposLabor = await NominasTiposLabor.findById(req.params.id);
            res.json(nominasTiposLabor);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear tipos de labor
    async postTipoLabor(req, res) {
        try {
            const nominasTiposLabor = NominasTiposLabor.create(req.body);
            res.json(nominasTiposLabor);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar tipos de labor
    async putTipoLabor(req, res) {
        try {
            const nominasTiposLabor = await NominasTiposLabor.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(nominasTiposLabor);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default nominasTiposLaborControllers;