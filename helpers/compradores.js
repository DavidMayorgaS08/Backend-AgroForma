import Compradores from '../models/compradores.js';
import Fincas from '../models/fincas.js';

const compradoresHelpers = {
    validarId: async (id) => {
        const comprador = await Compradores.findById(id);
        if (!comprador) {
            throw new Error('El comprador no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default compradoresHelpers;