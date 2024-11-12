import { Router } from 'express';
import insumosControllers from '../controllers/insumos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import insumosHelpers from '../helpers/insumos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], insumosControllers.getInsumos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(insumosHelpers.validarId),
    validarCampos
], insumosControllers.getInsumo);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(insumosHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Tipo_insumo', 'El Tipo_insumo es obligatorio').not().isEmpty(),
    check('Fecha_expiracion', 'La Fecha_expiracion es obligatoria').isDate(),
    check('Id_proveedor', 'El Id_proveedor es obligatorio').isMongoId(),
    check('Id_proveedor').custom(insumosHelpers.validarIdProveedor),
    check('Registro_ICA', 'El RegistroICA es obligatorio').not().isEmpty(),
    check('Registro_Invima', 'El Registro_invima es obligatorio').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Unidad', 'La Unidad es obligatoria').not().isEmpty(),
    check('Estado', 'El Estado es obligatorio').not().isEmpty(),
    validarCampos
], insumosControllers.postInsumo);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(insumosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(insumosHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Tipo_insumo', 'El Tipo_insumo es obligatorio').not().isEmpty(),
    check('Fecha_expiracion', 'La Fecha_expiracion es obligatoria').isDate(),
    check('Id_proveedor', 'El Id_proveedor es obligatorio').isMongoId(),
    check('Id_proveedor').custom(insumosHelpers.validarIdProveedor),
    check('Registro_ICA', 'El RegistroICA es obligatorio').not().isEmpty(),
    check('Registro_Invima', 'El Registro_invima es obligatorio').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Unidad', 'La Unidad es obligatoria').not().isEmpty(),
    check('Estado', 'El Estado es obligatorio').not().isEmpty(),
    validarCampos
], insumosControllers.putInsumo);

export default router;