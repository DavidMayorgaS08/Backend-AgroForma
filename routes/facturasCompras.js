import { Router } from 'express';
import facturasComprasControllers from '../controllers/facturasCompras.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import facturasComprasHelpers from '../helpers/facturasCompras.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], facturasComprasControllers.getFacturasCompras);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(facturasComprasHelpers.validarId),
    validarCampos
], facturasComprasControllers.getFacturaCompra);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(facturasComprasHelpers.validarIdFinca),
    check('Fecha_factura', 'La fecha de la factura es obligatoria').isDate(),
    check('Id_proveedor', 'El Id_proveedor es obligatorio').isMongoId(),
    check('Id_proveedor').custom(facturasComprasHelpers.validarIdProveedor),
    check('Detalle_compra', 'El Detalle_compra es obligatorio').isArray({ min: 1 }),
    check('Detalle_compra.*.Nombre_producto', 'El Nombre_producto es obligatorio').not().isEmpty(),
    check('Detalle_compra.*.Tipo_producto', 'El Tipo_producto es obligatorio').not().isEmpty(),
    check('Detalle_compra.*.Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Detalle_compra.*.Precio_unitario', 'El Precio_unitario es obligatorio').isNumeric(),
    check('Detalle_compra.*.Subtotal', 'El Subtotal es obligatorio').isNumeric(),
    check('Total', 'El total es obligatorio').isNumeric(),
    check('Impuestos', 'Los Impuestos son obligatorios').isNumeric(),
    check('Total_pagar', 'El Total_pagar es obligatorio').isNumeric(),
    check('Estado_pago', 'El Estado_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Tipo', 'El Tipo de Metodo_pago es obligatorio').not().isEmpty(),
    check('Archivo_adjunto.Nombre_archivo', 'El Nombre_archivo es obligatorio').not().isEmpty(),
    check('Archivo_adjunto.Url', 'El Url es obligatorio').not().isEmpty(),
    check('Archivo_adjunto.Tipo_archivo', 'El Tipo_archivo es obligatorio').not().isEmpty(),
    validarCampos
], facturasComprasControllers.postFacturaCompra);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(facturasComprasHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(facturasComprasHelpers.validarIdFinca),
    check('Fecha_factura', 'La fecha de la factura es obligatoria').isDate(),
    check('Id_proveedor', 'El Id_proveedor es obligatorio').isMongoId(),
    check('Id_proveedor').custom(facturasComprasHelpers.validarIdProveedor),
    check('Detalle_compra', 'El Detalle_compra es obligatorio').isArray({ min: 1 }),
    check('Detalle_compra.*.Nombre_producto', 'El Nombre_producto es obligatorio').not().isEmpty(),
    check('Detalle_compra.*.Tipo_producto', 'El Tipo_producto es obligatorio').not().isEmpty(),
    check('Detalle_compra.*.Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Detalle_compra.*.Precio_unitario', 'El Precio_unitario es obligatorio').isNumeric(),
    check('Detalle_compra.*.Subtotal', 'El Subtotal es obligatorio').isNumeric(),
    check('Total', 'El total es obligatorio').isNumeric(),
    check('Impuestos', 'Los Impuestos son obligatorios').isNumeric(),
    check('Total_pagar', 'El Total_pagar es obligatorio').isNumeric(),
    check('Estado_pago', 'El Estado_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Tipo', 'El Tipo de Metodo_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Banco', 'El Banco es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Numero_referencia', 'El Numero_referencia es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Fecha_pago', 'La Fecha_pago es obligatoria').isDate(),
    check('Archivo_adjunto.Nombre_archivo', 'El Nombre_archivo es obligatorio').not().isEmpty(),
    check('Archivo_adjunto.Url', 'El Url es obligatorio').not().isEmpty(),
    check('Archivo_adjunto.Tipo_archivo', 'El Tipo_archivo es obligatorio').not().isEmpty(),
    validarCampos
], facturasComprasControllers.putFacturaCompra);

export default router;