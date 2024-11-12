import { Router } from 'express';
import procesosControllers from '../controllers/procesos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import procesosHelpers from '../helpers/procesos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], procesosControllers.getProcesos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(procesosHelpers.validarId),
    validarCampos
], procesosControllers.getProceso);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(procesosHelpers.validarIdFinca),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Tipo_proceso', 'El Tipo_proceso es obligatorio').not().isEmpty(),
    check('Descripcion', 'La Descripcion es obligatoria').not().isEmpty(),
    check('Fecha_inicio', 'La Fecha_inicio es obligatoria').not().isEmpty(),
    check('Fecha_inicio', 'La Fecha_inicio no es válida').isISO8601(),
    check('Fecha_fin', 'La Fecha_fin es obligatoria').not().isEmpty(),
    check('Fecha_fin', 'La Fecha_fin no es válida').isISO8601(),
    validarCampos
], procesosControllers.postProceso);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(procesosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(procesosHelpers.validarIdFinca),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Tipo_proceso', 'El Tipo_proceso es obligatorio').not().isEmpty(),
    check('Descripcion', 'La Descripcion es obligatoria').not().isEmpty(),
    check('Fecha_inicio', 'La Fecha_inicio es obligatoria').not().isEmpty(),
    check('Fecha_inicio', 'La Fecha_inicio no es válida').isISO8601(),
    check('Fecha_fin', 'La Fecha_fin es obligatoria').not().isEmpty(),
    check('Fecha_fin', 'La Fecha_fin no es válida').isISO8601(),
    validarCampos
], procesosControllers.putProceso);

export default router;