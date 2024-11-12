import { Router } from 'express';
import nominasPagosControllers from '../controllers/nominasPagos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import nominasPagosHelpers from '../helpers/nominasPagos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], nominasPagosControllers.getNominasPagos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasPagosHelpers.validarId),
    validarCampos
], nominasPagosControllers.getNominaPago);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasPagosHelpers.validarIdFinca),
    check('Id_trabajador', 'El Id_trabajador es obligatorio').isMongoId(),
    check('Id_trabajador').custom(nominasPagosHelpers.validarIdNominaTrabajador),
    check('Fecha_pago', 'La Fecha_pago es obligatoria').isISO8601(),
    check('Monto_base', 'El Monto_base es obligatorio').isFloat({ min: 0 }),
    check('Bonificaciones').optional().isFloat({ min: 0 }),
    check('Motivo_bonificaciones').optional().isString(),
    check('Descuentos').optional().isFloat({ min: 0 }),
    check('Motivo_descuentos').optional().isString(),
    check('Impuestos').optional().isFloat({ min: 0 }),
    check('Motivo_impuestos').optional().isString(),
    check('Monto_total', 'El Monto_total es obligatorio').isFloat({ min: 0 }),
    validarCampos
], nominasPagosControllers.postNominaPago);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasPagosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasPagosHelpers.validarIdFinca),
    check('Id_trabajador', 'El Id_trabajador es obligatorio').isMongoId(),
    check('Id_trabajador').custom(nominasPagosHelpers.validarIdNominaTrabajador),
    check('Fecha_pago', 'La Fecha_pago es obligatoria').isISO8601(),
    check('Monto_base', 'El Monto_base es obligatorio').isFloat({ min: 0 }),
    check('Bonificaciones').optional().isFloat({ min: 0 }),
    check('Motivo_bonificaciones').optional().isString(),
    check('Descuentos').optional().isFloat({ min: 0 }),
    check('Motivo_descuentos').optional().isString(),
    check('Impuestos').optional().isFloat({ min: 0 }),
    check('Motivo_impuestos').optional().isString(),
    check('Monto_total', 'El Monto_total es obligatorio').isFloat({ min: 0 }),
    validarCampos
], nominasPagosControllers.putNominaPago);

export default router;