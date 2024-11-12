import Insumos from '../models/insumos.js';
import Fincas from "../models/fincas.js";
import Proveedores from "../models/proveedores.js";

const insumosHelpers = {
    validarId: async (id) => {
        const insumo = await Insumos.findById(id);
        if (!insumo) {
            throw new Error('El insumo no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarIdProveedor: async (id) => {
        const proveedor = await Proveedores.findById(id);
        if (!proveedor) {
            throw new Error('El proveedor no existe');
        }
    }
};

export default insumosHelpers;