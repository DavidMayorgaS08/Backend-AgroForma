import { Router } from 'express';
import maquinariaHerramientasControllers from '../controllers/maquinariaHerramientas.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import maquinariaHerramientasHelpers from '../helpers/maquinariaHerramientas.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], maquinariaHerramientasControllers.getMaquinariaHerramientas);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(maquinariaHerramientasHelpers.validarId),
    validarCampos
], maquinariaHerramientasControllers.getMaquinariaHerramienta);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(maquinariaHerramientasHelpers.validarIdFinca),
    check('Id_proveedor', 'El Id_proveedor es obligatorio').isMongoId(),
    check('Id_proveedor').custom(maquinariaHerramientasHelpers.validarIdProveedor),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Tipo', 'El Tipo es obligatorio').not().isEmpty(),
    check('Fecha_compra', 'La Fecha_compra es obligatoria').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').not().isEmpty(),
    check('Cantidad', 'La Cantidad debe ser un número').isNumeric(),
    check('Total', 'El Total es obligatorio').not().isEmpty(),
    check('Total', 'El Total debe ser un número').isNumeric(),
    check('mantenimiento.*.Fecha', 'La Fecha es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('mantenimiento.*.Responsable', 'El Responsable es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('mantenimiento.*.Precio', 'El Precio es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('mantenimiento.*.Precio', 'El Precio debe ser un número').optional({ checkFalsy: true }).isNumeric(),
    check('desinfeccion.*.Fecha', 'La Fecha es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('desinfeccion.*.Id_insumo', 'El Id_insumo es obligatorio').optional({ checkFalsy: true }).isMongoId(),
    check('desinfeccion.*.Id_insumo').custom(maquinariaHerramientasHelpers.validarIdInsumo),
    check('desinfeccion.*.Responsable', 'El Responsable es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    validarCampos
], maquinariaHerramientasControllers.postMaquinariaHerramienta);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(maquinariaHerramientasHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(maquinariaHerramientasHelpers.validarIdFinca),
    check('Id_proveedor', 'El Id_proveedor es obligatorio').isMongoId(),
    check('Id_proveedor').custom(maquinariaHerramientasHelpers.validarIdProveedor),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Tipo', 'El Tipo es obligatorio').not().isEmpty(),
    check('Fecha_compra', 'La Fecha_compra es obligatoria').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').not().isEmpty(),
    check('Cantidad', 'La Cantidad debe ser un número').isNumeric(),
    check('Total', 'El Total es obligatorio').not().isEmpty(),
    check('Total', 'El Total debe ser un número').isNumeric(),
    check('mantenimiento.*.Fecha', 'La Fecha es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('mantenimiento.*.Responsable', 'El Responsable es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('mantenimiento.*.Precio', 'El Precio es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    check('mantenimiento.*.Precio', 'El Precio debe ser un número').optional({ checkFalsy: true }).isNumeric(),
    check('desinfeccion.*.Fecha', 'La Fecha es obligatoria').optional({ checkFalsy: true }).not().isEmpty(),
    check('desinfeccion.*.Id_insumo', 'El Id_insumo es obligatorio').optional({ checkFalsy: true }).isMongoId(),
    check('desinfeccion.*.Id_insumo').custom(maquinariaHerramientasHelpers.validarIdInsumo),
    check('desinfeccion.*.Responsable', 'El Responsable es obligatorio').optional({ checkFalsy: true }).not().isEmpty(),
    validarCampos
], maquinariaHerramientasControllers.putMaquinariaHerramienta);

export default router;