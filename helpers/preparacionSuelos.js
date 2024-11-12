import preparacionSuelos from '../models/preparacionSuelos.js';
import Fincas from '../models/fincas.js';
import Parcelas from '../models/parcelas.js';

const preparacionSuelosHelpers = {
    validarId: async (id) => {
        const preparacionSuelo = await preparacionSuelos.findById(id);
        if (!preparacionSuelo) {
            throw new Error('La preparación de suelo no existe');
        }
    },
    validarFincas: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarParcelas: async (id) => {
        const parcela = await Parcelas.findById(id);
        if (!parcela) {
            throw new Error('La parcela no existe');
        }
    }
};

export default preparacionSuelosHelpers;