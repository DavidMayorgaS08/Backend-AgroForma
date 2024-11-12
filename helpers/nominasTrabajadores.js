import NominasTrabajadores from '../models/nominasTrabajadores.js';
import Fincas from '../models/fincas.js';

const nominasTrabajadoresHelpers = {
    validarId: async (id) => {
        const trabajador = await NominasTrabajadores.findById(id);
        if (!trabajador) {
            throw new Error('El trabajador no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default nominasTrabajadoresHelpers;