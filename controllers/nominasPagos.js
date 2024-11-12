import NominasPagos from '../models/nominasPagos.js';

const nominasPagosControllers = {
    // Listar todos los pagos de nóminas
    async getNominasPagos(req, res) {
        try {
            const nominasPagos = await NominasPagos.find();
            res.json(nominasPagos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar pagos de nóminas por id
    async getNominaPago(req, res) {
        try {
            const nominasPagos = await NominasPagos.findById(req.params.id);
            res.json(nominasPagos);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear pagos de nóminas
    async postNominaPago(req, res) {
        try {
            const nominaPago = NominasPagos.create(req.body);
            res.json(nominaPago);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar pagos de nóminas
    async putNominaPago(req, res) {
        try {
            const nominaPago = await NominasPagos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(nominaPago);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default nominasPagosControllers;