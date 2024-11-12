import { Router } from 'express';
import nominasTicketControllers from '../controllers/nominasTicket.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import nominasTicketHelpers from '../helpers/nominasTicket.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], nominasTicketControllers.getTickets);

router.get('/:id', [
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasTicketHelpers.validarId),
    validarCampos
], nominasTicketControllers.getTicket);

router.post('/', [
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasTicketHelpers.validarIdFinca),
    check('Id_pago', 'El Id_pago es obligatorio').isMongoId(),
    check('Id_pago').custom(nominasTicketHelpers.validarIdPago),
    check('Detalle', 'El Detalle es obligatorio').not().isEmpty(),
    check('Fecha_emision', 'La Fecha_emision no es válida').optional().isDate(),
    validarCampos
], nominasTicketControllers.postTicket);

router.put('/:id', [
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasTicketHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasTicketHelpers.validarIdFinca),
    check('Id_pago', 'El Id_pago es obligatorio').isMongoId(),
    check('Id_pago').custom(nominasTicketHelpers.validarIdPago),
    check('Detalle', 'El Detalle es obligatorio').not().isEmpty(),
    check('Fecha_emision', 'La Fecha_emision no es válida').optional().isDate(),
    validarCampos
], nominasTicketControllers.putTicket);

export default router;