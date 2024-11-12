import Semillas from '../models/semillas.js';
import Fincas from '../models/fincas.js';

const semillasHelpers = {
    validarId: async (id) => {
        const semilla = await Semillas.findById(id);
        if (!semilla) {
            throw new Error('La semilla no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default semillasHelpers;