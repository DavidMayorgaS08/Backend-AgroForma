import FacturasCompras from '../models/facturasCompras.js';
import Fincas from "../models/fincas.js";
import Proveedores from "../models/proveedores.js";

const facturasComprasHelpers = {
    validarId: async (id) => {
        const facturasCompras = await FacturasCompras.findById(id);
        if (!facturasCompras) {
            throw new Error('La factura de compra no existe');
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

export default facturasComprasHelpers;