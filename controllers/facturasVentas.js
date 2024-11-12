import FacturasVentas from '../models/facturasVentas.js';

const facturasVentasControllers = {
    // Listar todas las facturas de ventas
    async getFacturasVentas(req, res) {
        try {
            const facturasVentas = await FacturasVentas.find();
            res.json(facturasVentas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar factura de ventas por id
    async getFacturaVenta(req, res) {
        try {
            const facturasVentas = await FacturasVentas.findById(req.params.id);
            res.json(facturasVentas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear factura de ventas
    async postFacturaVenta(req, res) {
        try {
            const facturasVentas = FacturasVentas.create(req.body);
            res.json(facturasVentas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar factura de ventas
    async putFacturaVenta(req, res) {
        try {
            const facturasVentas = await FacturasVentas.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(facturasVentas);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default facturasVentasControllers;