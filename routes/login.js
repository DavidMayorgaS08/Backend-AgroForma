import { Router } from 'express';
import loginController from '../controllers/login.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';

const router = Router();

router.post('/', [
    check('Email', 'El email es obligatorio').isEmail(),
    check('Password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], loginController.login);

export default router;