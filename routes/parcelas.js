import { Router } from 'express';
import parcelasControllers from '../controllers/parcelas.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import parcelasHelpers from '../helpers/parcelas.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], parcelasControllers.getParcelas);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(parcelasHelpers.validarId),
    validarCampos
], parcelasControllers.getParcela);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(parcelasHelpers.validarIdFinca),
    check('Numero', 'El Numero es obligatorio').isInt(),
    check('Cultivo_anterior', 'El Cultivo_anterior es obligatorio').not().isEmpty(),
    check('Cultivo_actual', 'El Cultivo_actual es obligatorio').not().isEmpty(),
    check('Detalles_suelo', 'El Detalles_suelo es obligatorio').not().isEmpty(),
    check('Observaciones', 'El Observaciones es obligatorio').not().isEmpty(),
    check('Estado', 'El Estado es obligatorio').isIn(['En cultivo', 'Preparación', 'Abandonado']),
    validarCampos
], parcelasControllers.postParcela);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(parcelasHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(parcelasHelpers.validarIdFinca),
    check('Numero', 'El Numero es obligatorio').isInt(),
    check('Cultivo_anterior', 'El Cultivo_anterior es obligatorio').not().isEmpty(),
    check('Cultivo_actual', 'El Cultivo_actual es obligatorio').not().isEmpty(),
    check('Detalles_suelo', 'El Detalles_suelo es obligatorio').not().isEmpty(),
    check('Observaciones', 'El Observaciones es obligatorio').not().isEmpty(),
    check('Estado', 'El Estado es obligatorio').isIn(['En cultivo', 'Preparación', 'Abandonado']),
    validarCampos
], parcelasControllers.putParcela);

export default router;