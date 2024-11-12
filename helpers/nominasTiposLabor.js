import NominasTiposLabor from '../models/nominasTiposLabor.js';
import Fincas from '../models/fincas.js';

const nominasTiposLaborHelpers = {
    validarId: async (id) => {
        const nominasTiposLabor = await NominasTiposLabor.findById(id);
        if (!nominasTiposLabor) {
            throw new Error('El tipo de labor no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default nominasTiposLaborHelpers;