import Parcelas from '../models/parcelas.js';
import Fincas from '../models/fincas.js';

const parcelasHelpers = {
    validarId: async (id) => {
        const parcela = await Parcelas.findById(id);
        if (!parcela) {
            throw new Error('La parcela no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default parcelasHelpers;