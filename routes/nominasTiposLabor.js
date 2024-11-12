import { Router } from 'express';
import nominasTiposLaborControllers from '../controllers/nominasTiposLabor.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import nominasTiposLaborHelpers from '../helpers/nominasTiposLabor.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], nominasTiposLaborControllers.getTiposLabor);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasTiposLaborHelpers.validarId),
    validarCampos
], nominasTiposLaborControllers.getTipoLabor);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasTiposLaborHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Categoria', 'La Categoria es obligatoria').not().isEmpty(),
    check('Tarifa_base', 'La Tarifa_base es obligatoria').not().isEmpty(),
    check('Tarifa_base', 'La Tarifa_base debe ser un número').isNumeric(),
    check('Tarifa_producto', 'La Tarifa_producto es obligatoria').not().isEmpty(),
    check('Tarifa_producto', 'La Tarifa_producto debe ser un número').isNumeric(),
    check('Unidad_medida', 'La Unidad_medida es obligatoria').not().isEmpty(),
    validarCampos
], nominasTiposLaborControllers.postTipoLabor);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasTiposLaborHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasTiposLaborHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Categoria', 'La Categoria es obligatoria').not().isEmpty(),
    check('Tarifa_base', 'La Tarifa_base es obligatoria').not().isEmpty(),
    check('Tarifa_base', 'La Tarifa_base debe ser un número').isNumeric(),
    check('Tarifa_producto', 'La Tarifa_producto es obligatoria').not().isEmpty(),
    check('Tarifa_producto', 'La Tarifa_producto debe ser un número').isNumeric(),
    check('Unidad_medida', 'La Unidad_medida es obligatoria').not().isEmpty(),
    validarCampos
], nominasTiposLaborControllers.putTipoLabor);

export default router;