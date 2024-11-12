import NominasTicket from '../models/nominasTicket.js';
import Fincas from '../models/fincas.js';
import NominasPagos from '../models/nominasPagos.js';

const nominasTicketHelpers = {
    validarId: async (id) => {
        const ticket = await NominasTicket.findById(id);
        if (!ticket) {
            throw new Error('El ticket no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarIdPago: async (id) => {
        const pago = await NominasPagos.findById(id);
        if (!pago) {
            throw new Error('El pago no existe');
        }
    }
};

export default nominasTicketHelpers;