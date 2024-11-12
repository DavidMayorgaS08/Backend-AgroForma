import Producciones from '../models/producciones.js';
import fincas from '../models/fincas.js';
import Cultivos from '../models/cultivos.js';

const produccionesHelpers = {
    validarId: async (id) => {
        const produccion = await Producciones.findById(id);
        if (!produccion) {
            throw new Error('La produccion no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarIdCultivo: async (id) => {
        const cultivo = await Cultivos.findById(id);
        if (!cultivo) {
            throw new Error('El cultivo no existe');
        }
    }
};

export default produccionesHelpers;