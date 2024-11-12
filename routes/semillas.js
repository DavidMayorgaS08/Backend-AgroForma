import { Router } from 'express';
import semillasControllers from '../controllers/semillas.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import semillasHelpers from '../helpers/semillas.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], semillasControllers.getSemillas);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(semillasHelpers.validarId),
    validarCampos
], semillasControllers.getSemilla);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(semillasHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Registro_ICA', 'El Registro_ICA es obligatorio').not().isEmpty(),
    check('Registro_Invima', 'El Registro_Invima es obligatorio').not().isEmpty(),
    check('Fecha_vencimiento', 'La Fecha_vencimiento es obligatoria').isDate(),
    check('Especie_variedad', 'La Especie_variedad es obligatoria').not().isEmpty(),
    check('NroLote', 'El NroLote es obligatorio').not().isEmpty(),
    check('Origen', 'El Origen es obligatorio').not().isEmpty(),
    check('Poder_germinativo', 'El Poder_germinativo es obligatorio').isNumeric(),
    check('Observaciones', 'Las Observaciones son obligatorias').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Condiciones_almacenamiento', 'Las Condiciones_almacenamiento son obligatorias').not().isEmpty(),
    check('Metodo_almacenamiento', 'El Metodo_almacenamiento es obligatorio').not().isEmpty(),
    validarCampos
], semillasControllers.postSemilla);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(semillasHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(semillasHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Registro_ICA', 'El Registro_ICA es obligatorio').not().isEmpty(),
    check('Registro_Invima', 'El Registro_Invima es obligatorio').not().isEmpty(),
    check('Fecha_vencimiento', 'La Fecha_vencimiento es obligatoria').isDate(),
    check('Especie_variedad', 'La Especie_variedad es obligatoria').not().isEmpty(),
    check('NroLote', 'El NroLote es obligatorio').not().isEmpty(),
    check('Origen', 'El Origen es obligatorio').not().isEmpty(),
    check('Poder_germinativo', 'El Poder_germinativo es obligatorio').isNumeric(),
    check('Observaciones', 'Las Observaciones son obligatorias').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Condiciones_almacenamiento', 'Las Condiciones_almacenamiento son obligatorias').not().isEmpty(),
    check('Metodo_almacenamiento', 'El Metodo_almacenamiento es obligatorio').not().isEmpty(),
    validarCampos
], semillasControllers.putSemilla);

export default router;