import Siembras from "../models/siembras.js";
import Fincas from "../models/fincas.js";
import Cultivos from "../models/cultivos.js";
import Semillas from "../models/semillas.js";

const siembrasHelpers = {
    validarId: async (id) => {
        const siembra = await Siembras.findById(id);
        if (!siembra) {
            throw new Error('La siembra no existe');
        }
    }, 
    validarFincas: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarCultivos: async (id) => {
        const cultivo = await Cultivos.findById(id);
        if (!cultivo) {
            throw new Error('El cultivo no existe');
        }
    },
    validarSemillas: async (id) => {
        const semilla = await Semillas.findById(id);
        if (!semilla) {
            throw new Error('La semilla no existe');
        }
    }
};

export default siembrasHelpers;