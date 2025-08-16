import Fincas from "../models/fincas.js";

const climasHelpers = {
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }
};

export default climasHelpers;