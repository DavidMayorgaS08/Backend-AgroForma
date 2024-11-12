import { Router } from 'express';
import controlPlagasControllers from '../controllers/controlPlagas.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import controlPlagasHelpers from '../helpers/controlPlagas.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], controlPlagasControllers.getControlPlagas);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(controlPlagasHelpers.validarId),
    validarCampos
], controlPlagasControllers.getControlPlaga);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(controlPlagasHelpers.validarIdFinca),
    check('Id_cultivo', 'El Id_cultivo es obligatorio').isMongoId(),
    check('Id_cultivo').custom(controlPlagasHelpers.validarIdCultivo),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Tipo_control', 'El Tipo_control es obligatorio').not().isEmpty(),
    check('Ingrediente_activo', 'El Ingrediente_activo es obligatorio').not().isEmpty(),
    check('Dosis', 'La Dosis es obligatoria').not().isEmpty(),
    check('Frecuencia_aplicacion', 'La Frecuencia_aplicacion es obligatoria').not().isEmpty(),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Estado', 'El Estado es obligatorio').not().isEmpty(),
    validarCampos
], controlPlagasControllers.postControlPlaga);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(controlPlagasHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(controlPlagasHelpers.validarIdFinca),
    check('Id_cultivo', 'El Id_cultivo es obligatorio').isMongoId(),
    check('Id_cultivo').custom(controlPlagasHelpers.validarIdCultivo),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Tipo_control', 'El Tipo_control es obligatorio').not().isEmpty(),
    check('Ingrediente_activo', 'El Ingrediente_activo es obligatorio').not().isEmpty(),
    check('Dosis', 'La Dosis es obligatoria').not().isEmpty(),
    check('Frecuencia_aplicacion', 'La Frecuencia_aplicacion es obligatoria').not().isEmpty(),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Estado', 'El Estado es obligatorio').not().isEmpty(),
    validarCampos
], controlPlagasControllers.putControlPlaga);

export default router;