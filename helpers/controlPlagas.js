import ControlPlagas from '../models/controlPlagas.js';
import Fincas from "../models/fincas.js";
import Cultivos from "../models/cultivos.js";

const controlPlagasHelpers = {
    validarId: async (id) => {
        const controlPlagas = await ControlPlagas.findById(id);
        if (!controlPlagas) {
            throw new Error('El control de plagas no existe');
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

export default controlPlagasHelpers;