import FacturasCompras from '../models/facturasCompras.js';

const facturasComprasControllers = {
    // Listar todas las facturas de compras
    async getFacturasCompras(req, res) {
        try {
            const facturasCompras = await FacturasCompras.find();
            res.json(facturasCompras);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar factura de compra por id
    async getFacturaCompra(req, res) {
        try {
            const facturasCompras = await FacturasCompras.findById(req.params.id);
            res.json(facturasCompras);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear factura de compra
    async postFacturaCompra(req, res) {
        try {
            const facturasCompras = FacturasCompras.create(req.body);
            res.json(facturasCompras);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar factura de compra
    async putFacturaCompra(req, res) {
        try {
            const facturasCompras = await FacturasCompras.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(facturasCompras);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default facturasComprasControllers;