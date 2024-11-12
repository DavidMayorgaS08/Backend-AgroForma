import ElaboracionSustratos from '../models/elaboracionSustratos.js';
import Fincas from "../models/fincas.js";
import Cultivos from "../models/cultivos.js";

const elaboracionSustratosHelpers = {
    validarId: async (id) => {
        const elaboracionSustratos = await ElaboracionSustratos.findById(id);
        if (!elaboracionSustratos) {
            throw new Error('La elaboración de sustratos no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
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

export default elaboracionSustratosHelpers;