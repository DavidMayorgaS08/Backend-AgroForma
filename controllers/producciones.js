import Producciones from '../models/producciones.js';

const produccionesControllers = {
    // Listar todas las producciones
    async getProducciones(req, res) {
        try {
            const producciones = await Producciones.find();
            res.json(producciones);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar producciones por id
    async getProduccion(req, res) {
        try {
            const producciones = await Producciones.findById(req.params.id);
            res.json(producciones);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear producciones
    async postProduccion(req, res) {
        try {
            const produccion = Producciones.create(req.body);
            res.json(produccion);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar producciones
    async putProduccion(req, res) {
        try {
            const produccion = await Producciones.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(produccion);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default produccionesControllers;