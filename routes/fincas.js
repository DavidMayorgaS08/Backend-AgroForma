import { Router } from "express";
import fincasControllers from "../controllers/fincas.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import fincasHelpers from "../helpers/fincas.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], fincasControllers.getFincas);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(fincasHelpers.validarId),
    validarCampos
], fincasControllers.getFinca);

router.post('/',[
    validarJWT,
    check('Nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('Propietario', 'El propietario es obligatorio').not().isEmpty(),
    check('Tipo_finca', 'El tipo de finca es obligatorio').not().isEmpty(),
    check('Rut', 'El rut es obligatorio').not().isEmpty(),
    check('Ubicacion', 'La ubicación es obligatoria').not().isEmpty(),
    check('Area', 'El área es obligatoria').isNumeric(),
    validarCampos
], fincasControllers.postFinca);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(fincasHelpers.validarId),
    check('Nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('Propietario', 'El propietario es obligatorio').not().isEmpty(),
    check('Tipo_finca', 'El tipo de finca es obligatorio').not().isEmpty(),
    check('Rut', 'El rut es obligatorio').not().isEmpty(),
    check('Ubicacion', 'La ubicación es obligatoria').not().isEmpty(),
    check('Area', 'El área es obligatoria').isNumeric(),
    validarCampos
], fincasControllers.putFinca);

router.delete('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(fincasHelpers.validarId),
    validarCampos
], fincasControllers.deleteFinca);

export default router;