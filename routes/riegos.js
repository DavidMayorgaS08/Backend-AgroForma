import { Router } from "express";
import riegosControllers from "../controllers/riegos.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import riegosHelpers from "../helpers/riegos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], riegosControllers.getRiegos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(riegosHelpers.validarId),
    validarCampos
], riegosControllers.getRiego);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(riegosHelpers.validarIdFinca),
    check('Id_cultivo', 'El Id_cultivo es obligatorio').isMongoId(),
    check('Id_cultivo').custom(riegosHelpers.validarIdCultivo),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Dias_transplante', 'Los Dias_transplante son obligatorios').isInt(),
    check('Estado_fenologico', 'El Estado_fenologico es obligatorio').not().isEmpty(),
    check('Hora_inicio', 'La Hora_inicio es obligatoria').not().isEmpty(),
    check('Hora_fin', 'La Hora_fin es obligatoria').not().isEmpty(),
    check('Dosis', 'La Dosis es obligatoria').isFloat(),
    check('Cantidad_agua', 'La Cantidad_agua es obligatoria').isFloat(),
    check('Metodo_riego', 'El Metodo_riego es obligatorio').not().isEmpty(),
    validarCampos
], riegosControllers.postRiego);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(riegosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(riegosHelpers.validarIdFinca),
    check('Id_cultivo', 'El Id_cultivo es obligatorio').isMongoId(),
    check('Id_cultivo').custom(riegosHelpers.validarIdCultivo),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Dias_transplante', 'Los Dias_transplante son obligatorios').isInt(),
    check('Estado_fenologico', 'El Estado_fenologico es obligatorio').not().isEmpty(),
    check('Hora_inicio', 'La Hora_inicio es obligatoria').not().isEmpty(),
    check('Hora_fin', 'La Hora_fin es obligatoria').not().isEmpty(),
    check('Dosis', 'La Dosis es obligatoria').isFloat(),
    check('Cantidad_agua', 'La Cantidad_agua es obligatoria').isFloat(),
    check('Metodo_riego', 'El Metodo_riego es obligatorio').not().isEmpty(),
    validarCampos
], riegosControllers.putRiego);

export default router;
