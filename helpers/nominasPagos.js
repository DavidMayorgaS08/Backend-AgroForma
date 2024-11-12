import NominasPagos from '../models/nominasPagos.js';
import Fincas from '../models/fincas.js';
import NominasTrabajadores from '../models/nominasTrabajadores.js';

const nominasPagosHelpers = {
    validarId: async (id) => {
        const nominaPago = await NominasPagos.findById(id);
        if (!nominaPago) {
            throw new Error('El pago de nómina no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarIdNominaTrabajador: async (id) => {
        const nominaTrabajador = await NominasTrabajadores.findById(id);
        if (!nominaTrabajador) {
            throw new Error('La nómina del trabajador no existe');
        }
    }
};

export default nominasPagosHelpers;