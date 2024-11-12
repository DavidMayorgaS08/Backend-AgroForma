import NominasRegistroTrabajos from '../models/nominasRegistroTrabajos.js';
import Fincas from '../models/fincas.js';
import NominasTrabajadores from '../models/nominasTrabajadores.js';
import Parcelas from '../models/parcelas.js';
import NominasTiposLabor from '../models/nominasTiposLabor.js';

const nominasRegistroTrabajosHelpers = {
    validarId: async (id) => {
        const registroTrabajo = await NominasRegistroTrabajos.findById(id);
        if (!registroTrabajo) {
            throw new Error('El registro de trabajo no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarIdTrabajador: async (id) => {
        const trabajador = await NominasTrabajadores.findById(id);
        if (!trabajador) {
            throw new Error('El trabajador no existe');
        }
    },
    validarIdParcela: async (id) => {
        const parcela = await Parcelas.findById(id);
        if (!parcela) {
            throw new Error('La parcela no existe');
        }
    },
    validarIdTipoLabor: async (id) => {
        const tipoLabor = await NominasTiposLabor.findById(id);
        if (!tipoLabor) {
            throw new Error('El tipo de labor no existe');
        }
    }
};

export default nominasRegistroTrabajosHelpers;