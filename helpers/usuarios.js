import Usuarios from '../models/usuarios.js';
import Fincas from '../models/fincas.js';

const usuariosHelpers = {
    validarId: async (id) => {
        const usuario = await Usuarios.findById(id);
        if (!usuario) {
            throw new Error('El usuario no existe');
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error('La finca no existe');
        }
    },
    validarDocumentoUnico: async (documento) => {
        const usuario = await Usuarios.findOne({ Documento: documento });
        if (usuario) {
            throw new Error('El documento ya está registrado');
        }
    },
    validarEmailUnico: async (email) => {
        const usuario = await Usuarios.findOne({ Email: email });
        if (usuario) {
            throw new Error('El email ya está registrado');
        }
    }
};

export default usuariosHelpers;