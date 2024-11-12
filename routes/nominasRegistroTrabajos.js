import { Router } from 'express';
import nominasRegistroTrabajosControllers from '../controllers/nominasRegistroTrabajos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import nominasRegistroTrabajosHelpers from '../helpers/nominasRegistroTrabajos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], nominasRegistroTrabajosControllers.getNominasRegistroTrabajos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasRegistroTrabajosHelpers.validarId),
    validarCampos
], nominasRegistroTrabajosControllers.getNominaRegistroTrabajo);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasRegistroTrabajosHelpers.validarIdFinca),
    check('Id_trabajador', 'El Id_trabajador es obligatorio').isMongoId(),
    check('Id_trabajador').custom(nominasRegistroTrabajosHelpers.validarIdTrabajador),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Hora_inicio', 'La Hora_inicio es obligatoria').not().isEmpty(),
    check('Hora_fin', 'La Hora_fin es obligatoria').not().isEmpty(),
    check('Tiempo_total', 'El Tiempo_total es obligatorio').isNumeric(),
    check('Id_parcela', 'El Id_parcela es obligatorio').isMongoId(),
    check('Id_parcela').custom(nominasRegistroTrabajosHelpers.validarIdParcela),
    check('Id_tipoLabor', 'El Id_tipoLabor es obligatorio').isMongoId(),
    check('Id_tipoLabor').custom(nominasRegistroTrabajosHelpers.validarIdTipoLabor),
    check('Cantidad_recogida', 'La Cantidad_recogida es obligatoria').isNumeric(),
    validarCampos
], nominasRegistroTrabajosControllers.postNominaRegistroTrabajo);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasRegistroTrabajosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasRegistroTrabajosHelpers.validarIdFinca),
    check('Id_trabajador', 'El Id_trabajador es obligatorio').isMongoId(),
    check('Id_trabajador').custom(nominasRegistroTrabajosHelpers.validarIdTrabajador),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Hora_inicio', 'La Hora_inicio es obligatoria').not().isEmpty(),
    check('Hora_fin', 'La Hora_fin es obligatoria').not().isEmpty(),
    check('Tiempo_total', 'El Tiempo_total es obligatorio').isNumeric(),
    check('Id_parcela', 'El Id_parcela es obligatorio').isMongoId(),
    check('Id_parcela').custom(nominasRegistroTrabajosHelpers.validarIdParcela),
    check('Id_tipoLabor', 'El Id_tipoLabor es obligatorio').isMongoId(),
    check('Id_tipoLabor').custom(nominasRegistroTrabajosHelpers.validarIdTipoLabor),
    check('Cantidad_recogida', 'La Cantidad_recogida es obligatoria').isNumeric(),
    validarCampos
], nominasRegistroTrabajosControllers.putNominaRegistroTrabajo);

export default router;