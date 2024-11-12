import { Router } from 'express';
import proveedoresControllers from '../controllers/proveedores.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import proveedoresHelpers from '../helpers/proveedores.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], proveedoresControllers.getProveedores);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(proveedoresHelpers.validarId),
    validarCampos
], proveedoresControllers.getProveedor);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(proveedoresHelpers.validarIdFinca),
    check('Tipo_proveedor', 'El Tipo_proveedor es obligatorio').isIn(['Natural', 'Juridica']),
    check('Telefono', 'El Telefono es obligatorio').not().isEmpty(),
    check('Correo', 'El Correo es obligatorio').isEmail(),
    check('Direccion', 'La Direccion es obligatoria').not().isEmpty(),
    check('Datos_natural.*.Nombre', 'El Nombre es obligatorio').optional({ checkFalsy: true}).not().isEmpty(),
    check('Datos_natural.*.Num_identificacion', 'El Num_identificacion es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_natural.*.Direccion', 'La Direccion es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_natural.*.Telefono', 'El Telefono es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_natural.*.Responsable_iva', 'El Responsable_iva es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_natural.*.Responsable_retencion_fuente', 'El Responsable_retencion_fuente es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Razon_social', 'La Razon_social es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Num_identificacion', 'El Num_identificacion es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Direccion', 'La Direccion es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Telefono', 'El Telefono es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Correo', 'El Correo es obligatorio').optional({ checkFalsy: true }).isEmail(),
    check('Datos_juridica.*.Representante_legal.Nombre', 'El Nombre es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Representante_legal.Num_identificacion', 'El Num_identificacion es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Representante_legal.Direccion', 'La Direccion es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Representante_legal.Telefono', 'El Telefono es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Responsable_iva', 'El Responsable_iva es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Responsable_retencion_fuente', 'El Responsable_retencion_fuente es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    validarCampos
], proveedoresControllers.postProveedor);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(proveedoresHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(proveedoresHelpers.validarIdFinca),
    check('Tipo_proveedor', 'El Tipo_proveedor es obligatorio').isIn(['Natural', 'Juridica']),
    check('Telefono', 'El Telefono es obligatorio').not().isEmpty(),
    check('Correo', 'El Correo es obligatorio').isEmail(),
    check('Direccion', 'La Direccion es obligatoria').not().isEmpty(),
    check('Datos_natural.*.Nombre', 'El Nombre es obligatorio').optional({ checkFalsy: true}).not().isEmpty(),
    check('Datos_natural.*.Num_identificacion', 'El Num_identificacion es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_natural.*.Direccion', 'La Direccion es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_natural.*.Telefono', 'El Telefono es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_natural.*.Responsable_iva', 'El Responsable_iva es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_natural.*.Responsable_retencion_fuente', 'El Responsable_retencion_fuente es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Razon_social', 'La Razon_social es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Num_identificacion', 'El Num_identificacion es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Direccion', 'La Direccion es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Telefono', 'El Telefono es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Correo', 'El Correo es obligatorio').optional({ checkFalsy: true }).isEmail(),
    check('Datos_juridica.*.Representante_legal.Nombre', 'El Nombre es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Representante_legal.Num_identificacion', 'El Num_identificacion es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Representante_legal.Direccion', 'La Direccion es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Representante_legal.Telefono', 'El Telefono es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Responsable_iva', 'El Responsable_iva es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('Datos_juridica.*.Responsable_retencion_fuente', 'El Responsable_retencion_fuente es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    validarCampos
], proveedoresControllers.putProveedor);

export default router;