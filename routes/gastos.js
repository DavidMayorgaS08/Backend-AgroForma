import { Router } from 'express';
import gastosControllers from '../controllers/gastos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import gastosHelpers from '../helpers/gastos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], gastosControllers.getGastos);

router.get('/:id', [
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(gastosHelpers.validarId),
    validarCampos
], gastosControllers.getGasto);

router.post('/', [
    validarJWT,
    check('Id_finca', 'El id de la finca es obligatorio').isMongoId(),
    check('Fecha', 'La fecha es obligatoria').isISO8601(),
    check('Monto', 'El monto es obligatorio').isNumeric(),
    check('Descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('Responsable', 'El responsable es obligatorio').not().isEmpty(),
    check('Metodo_pago', 'El método de pago es obligatorio').not().isEmpty(),
    validarCampos
], gastosControllers.postGasto);

router.put('/:id', [
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(gastosHelpers.validarId),
    check('Id_finca', 'El id de la finca es obligatorio').isMongoId(),
    check('Fecha', 'La fecha es obligatoria').isISO8601(),
    check('Monto', 'El monto es obligatorio').isNumeric(),
    check('Descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('Responsable', 'El responsable es obligatorio').not().isEmpty(),
    check('Metodo_pago', 'El método de pago es obligatorio').not().isEmpty(),
    validarCampos
], gastosControllers.putGasto);

export default router;