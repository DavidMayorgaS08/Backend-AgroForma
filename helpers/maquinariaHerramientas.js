import MaquinariaHerramientas from '../models/maquinariaHerramientas.js';
import Fincas from "../models/fincas.js";
import Proveedores from "../models/proveedores.js";
import Insumos from "../models/insumos.js";

const maquinariaHerramientasHelpers = {
    validarId: async (id) => {
        const maquinariaHerramientas = await MaquinariaHerramientas.findById(id);
        if (!maquinariaHerramientas) {
            throw new Error('La maquinaria o herramienta no existe');
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
    },
    validarIdInsumo: async (id) => {
        const insumo = await Insumos.findById(id);
        if (!insumo) {
            throw new Error('El insumo no existe');
        }
    }
};

export default maquinariaHerramientasHelpers;