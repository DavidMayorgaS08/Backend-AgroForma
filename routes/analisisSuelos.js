import { Router } from 'express';
import analisisSuelosControllers from '../controllers/analisisSuelos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import analisisSuelosHelpers from '../helpers/analisisSuelos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], analisisSuelosControllers.getAnalisisSuelos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(analisisSuelosHelpers.validarId),
    validarCampos
], analisisSuelosControllers.getAnalisisSuelo);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(analisisSuelosHelpers.validarIdFinca),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Id_parcela', 'El Id_parcela es obligatorio').isMongoId(),
    check('Id_parcela').custom(analisisSuelosHelpers.validarIdParcela),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Laboratorio', 'El Laboratorio es obligatorio').not().isEmpty(),
    check('Recomendaciones', 'Las Recomendaciones son obligatorias').not().isEmpty(),
    check('Muestra', 'La Muestra es obligatoria').not().isEmpty(),
    check('Resultado.*.Fosforo', 'El Fosforo es obligatorio').isNumeric(),
    check('Resultado.*.Azufre', 'El Azufre es obligatorio').isNumeric(),
    check('Resultado.*.Zinc', 'El Zinc es obligatorio').isNumeric(),
    check('Resultado.*.Manganeso', 'El Manganeso es obligatorio').isNumeric(),
    check('Resultado.*.Cobre', 'El Cobre es obligatorio').isNumeric(),
    check('Resultado.*.Potasio', 'El Potasio es obligatorio').isNumeric(),
    check('Resultado.*.Calcio', 'El Calcio es obligatorio').isNumeric(),
    check('Resultado.*.Magnesio', 'El Magnesio es obligatorio').isNumeric(),
    check('Resultado.*.Sodio', 'El Sodio es obligatorio').isNumeric(),
    check('Estado', 'El Estado es obligatorio').not().isEmpty(),
    validarCampos
], analisisSuelosControllers.postAnalisisSuelo);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(analisisSuelosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(analisisSuelosHelpers.validarIdFinca),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Id_parcela', 'El Id_parcela es obligatorio').isMongoId(),
    check('Id_parcela').custom(analisisSuelosHelpers.validarIdParcela),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Laboratorio', 'El Laboratorio es obligatorio').not().isEmpty(),
    check('Recomendaciones', 'Las Recomendaciones son obligatorias').not().isEmpty(),
    check('Muestra', 'La Muestra es obligatoria').not().isEmpty(),
    check('Resultado.*.Fosforo', 'El Fosforo es obligatorio').isNumeric(),
    check('Resultado.*.Azufre', 'El Azufre es obligatorio').isNumeric(),
    check('Resultado.*.Zinc', 'El Zinc es obligatorio').isNumeric(),
    check('Resultado.*.Manganeso', 'El Manganeso es obligatorio').isNumeric(),
    check('Resultado.*.Cobre', 'El Cobre es obligatorio').isNumeric(),
    check('Resultado.*.Potasio', 'El Potasio es obligatorio').isNumeric(),
    check('Resultado.*.Calcio', 'El Calcio es obligatorio').isNumeric(),
    check('Resultado.*.Magnesio', 'El Magnesio es obligatorio').isNumeric(),
    check('Resultado.*.Sodio', 'El Sodio es obligatorio').isNumeric(),
    check('Estado', 'El Estado es obligatorio').not().isEmpty(),
    validarCampos
], analisisSuelosControllers.putAnalisisSuelo);

export default router;