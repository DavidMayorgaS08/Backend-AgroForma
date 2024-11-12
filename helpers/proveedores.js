import Proveedores from '../models/proveedores.js';
import Fincas from '../models/fincas.js';

const proveedoresHelpers = {
    validarId: async (id) => {
        const proveedor = await Proveedores.findById(id);
        if (!proveedor) {
            throw new Error('El proveedor no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default proveedoresHelpers;