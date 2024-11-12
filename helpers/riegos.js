import Riegos from "../models/riegos.js";
import fincas from "../models/fincas.js";
import cultivos from "../models/cultivos.js";

const riegosControllers = {
    validarId: async (id) => {
        const riego = await Riegos.findById(id);
        if (!riego) {
            throw new Error('El riego no existe');
        }
    }, 

    validarIdFinca: async (id) => {
        const finca = await fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    }, 

    validarIdCultivo: async (id) => {
        const cultivo = await cultivos.findById(id);
        if (!cultivo) {
            throw new Error('El cultivo no existe');
        }
    }
};

export default riegosControllers;