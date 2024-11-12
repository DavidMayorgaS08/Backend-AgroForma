import Usuarios from '../models/usuarios.js';
import { generarJWT } from '../middlewares/validar-jwt.js';
import bcrypt from 'bcryptjs';

const loginController = {
    async login(req, res) {
        try{
            const usuario = await Usuarios.findOne({ Email: req.body.Email });
            if (!usuario) {
                return res.status(400).json({
                    msg: 'Usuario o contraseña incorrectos - email'
                });
            }
            const validPassword = await bcrypt.compare(req.body.Password, usuario.Password);
            if (!validPassword) {
                return res.status(400).json({
                    msg: 'Usuario o contraseña incorrectos - password'
                });
            }
            const token = await generarJWT(usuario.id);
            res.json({
                usuario,
                token
            });
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                msg: 'Error al iniciar sesión'
            });
            console.log(error);
            
        }
    }
};

export default loginController;