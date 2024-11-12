import { Router } from 'express';
import cultivosControllers from '../controllers/cultivos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import cultivosHelpers from '../helpers/cultivos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], cultivosControllers.getCultivos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(cultivosHelpers.validarId),
    validarCampos
], cultivosControllers.getCultivo);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(cultivosHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Tipo', 'El Tipo es obligatorio').not().isEmpty(),
    check('Id_parcela', 'El Id_parcela es obligatorio').isMongoId(),
    check('Id_parcela').custom(cultivosHelpers.validarIdParcela),
    check('Fecha_siembra', 'La Fecha_siembra es obligatoria').not().isEmpty(),
    check('Fecha_siembra', 'La Fecha_siembra no es válida').isDate(),
    check('Variedad', 'La Variedad es obligatoria').not().isEmpty(),
    check('Estado', 'El Estado es obligatorio').not().isEmpty(),
    validarCampos
], cultivosControllers.postCultivo);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(cultivosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(cultivosHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Tipo', 'El Tipo es obligatorio').not().isEmpty(),
    check('Id_parcela', 'El Id_parcela es obligatorio').isMongoId(),
    check('Id_parcela').custom(cultivosHelpers.validarIdParcela),
    check('Fecha_siembra', 'La Fecha_siembra es obligatoria').not().isEmpty(),
    check('Fecha_siembra', 'La Fecha_siembra no es válida').isDate(),
    check('Variedad', 'La Variedad es obligatoria').not().isEmpty(),
    check('Estado', 'El Estado es obligatorio').not().isEmpty(),
    validarCampos
], cultivosControllers.putCultivo);

export default router;