import AnalisisSuelos from "../models/analisisSuelos.js";
import Fincas from "../models/fincas.js";
import Parcelas from "../models/parcelas.js";

const analisisSuelosHelpers = {
    validarId: async (id) => {
        const analisisSuelo = await AnalisisSuelos.findById(id);
        if (!analisisSuelo) {
            throw new Error('El analisis de suelos no existe');
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

export default analisisSuelosHelpers;