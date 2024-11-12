import Gastos from "../models/gastos.js";
import Fincas from "../models/fincas.js";

const gastosHelpers = {
    validarId: async (id) => {
        const gastos = await Gastos.findById(id);
        if (!gastos) {
            throw new Error('El gasto no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default gastosHelpers;