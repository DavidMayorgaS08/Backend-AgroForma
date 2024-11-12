import { Router } from 'express';
import facturasVentasControllers from '../controllers/facturasVentas.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import facturasVentasHelpers from '../helpers/facturasVentas.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], facturasVentasControllers.getFacturasVentas);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(facturasVentasHelpers.validarId),
    validarCampos
], facturasVentasControllers.getFacturaVenta);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(facturasVentasHelpers.validarIdFinca),
    check('Tipo_factura', 'El Tipo_factura es obligatorio').not().isEmpty(),
    check('Consecutivo', 'El Consecutivo es obligatorio').isInt(),
    check('Fecha_generacion', 'La Fecha_generacion es obligatoria').isISO8601(),
    check('Emisor.Nombre', 'El Nombre del Emisor es obligatorio').not().isEmpty(),
    check('Emisor.Tipo_documento', 'El Tipo_documento del Emisor es obligatorio').not().isEmpty(),
    check('Emisor.Numero', 'El Numero del Emisor es obligatorio').not().isEmpty(),
    check('Emisor.Direccion', 'La Direccion del Emisor es obligatoria').not().isEmpty(),
    check('Emisor.Telefono', 'El Telefono del Emisor es obligatorio').not().isEmpty(),
    check('Emisor.Correo', 'El Correo del Emisor es obligatorio').isEmail(),
    check('Receptor.Nombre', 'El nombre del Receptor es obligatorio').not().isEmpty(),
    check('Receptor.Tipo_documento', 'El Tipo_documento del Receptor es obligatorio').not().isEmpty(),
    check('Receptor.Numero', 'El Numero del Receptor es obligatorio').not().isEmpty(),
    check('Receptor.Direccion', 'La Direccion del Receptor es obligatoria').not().isEmpty(),
    check('Receptor.Telefono', 'El Telefono del Receptor es obligatorio').not().isEmpty(),
    check('Receptor.Correo', 'El Correo del Receptor es obligatorio').isEmail(),
    check('Productos.*.Tipo_cultivo', 'El Tipo_cultivo del Producto es obligatorio').not().isEmpty(),
    check('Productos.*.Calidad', 'La Calidad del Producto es obligatoria').not().isEmpty(),
    check('Productos.*.Unidad_medida', 'La Unidad_medida del Producto es obligatoria').not().isEmpty(),
    check('Productos.*.Cantidad', 'La Cantidad del Producto es obligatoria').isInt(),
    check('Productos.*.Precio_unitario', 'El Precio_unitario del Producto es obligatorio').isFloat(),
    check('Productos.*.Subtotal', 'El Subtotal del Producto es obligatorio').isFloat(),
    check('Total', 'El Total es obligatorio').isFloat(),
    check('Impuesto', 'El Impuesto es obligatorio').isFloat(),
    check('Total_pagar', 'El Total_pagar es obligatorio').isFloat(),
    check('Factura_electronica.Consecutivo_dian', 'El Consecutivo_dian de la Factura_electronica es obligatorio').not().isEmpty(),
    check('Factura_electronica.Cufe', 'El Cufe de la Factura_electronica es obligatorio').not().isEmpty(),
    check('Factura_electronica.Firma_digital', 'La Firma_digital de la Factura_electronica es obligatoria').not().isEmpty(),
    check('Metodo_pago.Tipo', 'El Tipo del Metodo_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Banco', 'El Banco del Metodo_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Numero_referencia', 'El Numero_referencia del Metodo_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Fecha_pago', 'La Fecha_pago del Metodo_pago es obligatoria').isISO8601(),
    check('Id_comprador', 'El Id_comprador es obligatorio').isMongoId(),
    check('Id_comprador').custom(facturasVentasHelpers.validarIdComprador),
    check('Id_produccion', 'El Id_produccion es obligatorio').isMongoId(),
    check('Id_produccion').custom(facturasVentasHelpers.validarIdProduccion),
    validarCampos
], facturasVentasControllers.postFacturaVenta);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(facturasVentasHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(facturasVentasHelpers.validarIdFinca),
    check('Tipo_factura', 'El Tipo_factura es obligatorio').not().isEmpty(),
    check('Consecutivo', 'El Consecutivo es obligatorio').isInt(),
    check('Fecha_generacion', 'La Fecha_generacion es obligatoria').isISO8601(),
    check('Emisor.Nombre', 'El Nombre del Emisor es obligatorio').not().isEmpty(),
    check('Emisor.Tipo_documento', 'El Tipo_documento del Emisor es obligatorio').not().isEmpty(),
    check('Emisor.Numero', 'El Numero del Emisor es obligatorio').not().isEmpty(),
    check('Emisor.Direccion', 'La Direccion del Emisor es obligatoria').not().isEmpty(),
    check('Emisor.Telefono', 'El Telefono del Emisor es obligatorio').not().isEmpty(),
    check('Emisor.Correo', 'El Correo del Emisor es obligatorio').isEmail(),
    check('Receptor.Nombre', 'El nombre del Receptor es obligatorio').not().isEmpty(),
    check('Receptor.Tipo_documento', 'El Tipo_documento del Receptor es obligatorio').not().isEmpty(),
    check('Receptor.Numero', 'El Numero del Receptor es obligatorio').not().isEmpty(),
    check('Receptor.Direccion', 'La Direccion del Receptor es obligatoria').not().isEmpty(),
    check('Receptor.Telefono', 'El Telefono del Receptor es obligatorio').not().isEmpty(),
    check('Receptor.Correo', 'El Correo del Receptor es obligatorio').isEmail(),
    check('Productos.*.Tipo_cultivo', 'El Tipo_cultivo del Producto es obligatorio').not().isEmpty(),
    check('Productos.*.Calidad', 'La Calidad del Producto es obligatoria').not().isEmpty(),
    check('Productos.*.Unidad_medida', 'La Unidad_medida del Producto es obligatoria').not().isEmpty(),
    check('Productos.*.Cantidad', 'La Cantidad del Producto es obligatoria').isInt(),
    check('Productos.*.Precio_unitario', 'El Precio_unitario del Producto es obligatorio').isFloat(),
    check('Productos.*.Subtotal', 'El Subtotal del Producto es obligatorio').isFloat(),
    check('Total', 'El Total es obligatorio').isFloat(),
    check('Impuesto', 'El Impuesto es obligatorio').isFloat(),
    check('Total_pagar', 'El Total_pagar es obligatorio').isFloat(),
    check('Factura_electronica.Consecutivo_dian', 'El Consecutivo_dian de la Factura_electronica es obligatorio').not().isEmpty(),
    check('Factura_electronica.Cufe', 'El Cufe de la Factura_electronica es obligatorio').not().isEmpty(),
    check('Factura_electronica.Firma_digital', 'La Firma_digital de la Factura_electronica es obligatoria').not().isEmpty(),
    check('Metodo_pago.Tipo', 'El Tipo del Metodo_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Banco', 'El Banco del Metodo_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Numero_referencia', 'El Numero_referencia del Metodo_pago es obligatorio').not().isEmpty(),
    check('Metodo_pago.Detalles.Fecha_pago', 'La Fecha_pago del Metodo_pago es obligatoria').isISO8601(),
    check('Id_comprador', 'El Id_comprador es obligatorio').isMongoId(),
    check('Id_comprador').custom(facturasVentasHelpers.validarIdComprador),
    check('Id_produccion', 'El Id_produccion es obligatorio').isMongoId(),
    check('Id_produccion').custom(facturasVentasHelpers.validarIdProduccion),
    validarCampos
], facturasVentasControllers.putFacturaVenta);

export default router;