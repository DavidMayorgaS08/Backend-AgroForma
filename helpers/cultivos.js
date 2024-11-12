import Cultivos from "../models/cultivos.js";
import Fincas from "../models/fincas.js";
import Parcelas from "../models/parcelas.js";

const cultivosHelpers = {
    validarId: async (id) => {
        const cultivo = await Cultivos.findById(id);
        if (!cultivo) {
            throw new Error('El cultivo no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarIdParcela: async (id) => {
        const parcela = await Parcelas.findById(id);
        if (!parcela) {
            throw new Error('La parcela no existe');
        }
    }
};

export default cultivosHelpers;