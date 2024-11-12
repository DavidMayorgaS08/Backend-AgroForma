import Proveedores from '../models/proveedores.js';

const proveedoresControllers = {
    // Listar todos los proveedores
    async getProveedores(req, res) {
        try {
            const proveedores = await Proveedores.find();
            res.json(proveedores);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar proveedores por id
    async getProveedor(req, res) {
        try {
            const proveedores = await Proveedores.findById(req.params.id);
            res.json(proveedores);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear proveedores
    async postProveedor(req, res) {
        try {
            const proveedor = Proveedores.create(req.body);
            res.json(proveedor);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar proveedores
    async putProveedor(req, res) {
        try {
            const proveedor = await Proveedores.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(proveedor);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default proveedoresControllers;