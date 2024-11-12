import FacturasVentas from '../models/facturasVentas.js';
import Fincas from "../models/fincas.js";
import Compradores from "../models/compradores.js";
import Producciones from "../models/producciones.js";

const facturasVentasHelpers = {
    validarId: async (id) => {
        const facturasVentas = await FacturasVentas.findById(id);
        if (!facturasVentas) {
            throw new Error('La factura de ventas no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarIdComprador: async (id) => {
        const comprador = await Compradores.findById(id);
        if (!comprador) {
            throw new Error('El comprador no existe');
        }
    },
    validarIdProduccion: async (id) => {
        const produccion = await Producciones.findById(id);
        if (!produccion) {
            throw new Error('La producción no existe');
        }
    }
};

export default facturasVentasHelpers;