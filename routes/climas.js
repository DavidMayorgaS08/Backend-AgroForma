import { Router } from "express";
import climasControllers from "../controllers/climas.js";
import { check } from "express-validator";
import climasHelpers from "../helpers/climas.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import climas from "../models/climas.js";

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], climasControllers.getClimas);

router.post('/', [
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(climasHelpers.validarIdFinca),
    check('Temperatura', 'La Temperatura es obligatoria').isNumeric(),
    check('Clima', 'El Clima es obligatorio').notEmpty(),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Humedad', 'La Humedad es obligatoria').isNumeric(),
    check('Velocidad_viento', 'La Velocidad_viento es obligatoria').isNumeric(),
    check('Nubosidad', 'La Nubosidad es obligatoria').isNumeric(),
    validarCampos
], climasControllers.createClima);

export default router;