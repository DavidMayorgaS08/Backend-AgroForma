import { Router } from 'express';
import fertilizantesControllers from '../controllers/fertilizantes.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import fertilizantesHelpers from '../helpers/fertilizantes.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], fertilizantesControllers.getFertilizantes);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(fertilizantesHelpers.validarId),
    validarCampos
], fertilizantesControllers.getFertilizante);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(fertilizantesHelpers.validarIdFinca),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Fecha', 'La Fecha es obligatoria').isDate(),
    check('Estado_fenologico', 'El Estado_fenologico es obligatorio').not().isEmpty(),
    check('Aplicacion', 'La Aplicacion es obligatoria').not().isEmpty(),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Id_insumo', 'El Id_insumo es obligatorio').isMongoId(),
    check('Id_insumo').custom(fertilizantesHelpers.validarIdInsumo),
    check('Tipo_fertilizante', 'El Tipo_fertilizante es obligatorio').not().isEmpty(),
    validarCampos
], fertilizantesControllers.postFertilizante);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(fertilizantesHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(fertilizantesHelpers.validarIdFinca),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Fecha', 'La Fecha es obligatoria').isDate(),
    check('Estado_fenologico', 'El Estado_fenologico es obligatorio').not().isEmpty(),
    check('Aplicacion', 'La Aplicacion es obligatoria').not().isEmpty(),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Id_insumo', 'El Id_insumo es obligatorio').isMongoId(),
    check('Id_insumo').custom(fertilizantesHelpers.validarIdInsumo),
    check('Tipo_fertilizante', 'El Tipo_fertilizante es obligatorio').not().isEmpty(),
    validarCampos
], fertilizantesControllers.putFertilizante);

export default router;