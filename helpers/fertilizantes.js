import Fertilizantes from '../models/fertilizantes.js';
import Fincas from "../models/fincas.js";
import Insumos from "../models/insumos.js";

const fertilizantesHelpers = {
    validarId: async (id) => {
        const fertilizantes = await Fertilizantes.findById(id);
        if (!fertilizantes) {
            throw new Error('El fertilizante no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarIdInsumo: async (id) => {
        const insumo = await Insumos.findById(id);
        if (!insumo) {
            throw new Error('El insumo no existe');
        }
    }
};

export default fertilizantesHelpers;