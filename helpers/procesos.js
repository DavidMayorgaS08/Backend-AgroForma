import Procesos from "../models/procesos.js";
import Fincas from "../models/fincas.js";

const procesosHelpers = {
    validarId: async (id) => {
        const proceso = await Procesos.findById(id);
        if (!proceso) {
            throw new Error('El proceso no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default procesosHelpers;