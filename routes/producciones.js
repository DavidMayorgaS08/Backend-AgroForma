import { Router } from 'express';
import produccionesControllers from '../controllers/producciones.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import produccionesHelpers from '../helpers/producciones.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], produccionesControllers.getProducciones);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(produccionesHelpers.validarId),
    validarCampos
], produccionesControllers.getProduccion);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(produccionesHelpers.validarIdFinca),
    check('Id_cultivo', 'El Id_cultivo es obligatorio').isMongoId(),
    check('Id_cultivo').custom(produccionesHelpers.validarIdCultivo),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('NroLote', 'El NroLote es obligatorio').not().isEmpty(),
    check('Especie', 'La Especie es obligatoria').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Cantidad_trabajadores', 'La Cantidad_trabajadores es obligatoria').isNumeric(),
    check('Estado_produccion', 'El Estado_produccion es obligatorio').isIn(['En curso', 'Completado', 'Cancelado']),
    check('Calidad_produccion', 'La Calidad_produccion es obligatoria').isIn(['Excelente', 'Buena', 'Regular', 'Mala']),
    validarCampos
], produccionesControllers.postProduccion);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(produccionesHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(produccionesHelpers.validarIdFinca),
    check('Id_cultivo', 'El Id_cultivo es obligatorio').isMongoId(),
    check('Id_cultivo').custom(produccionesHelpers.validarIdCultivo),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('NroLote', 'El NroLote es obligatorio').not().isEmpty(),
    check('Especie', 'La Especie es obligatoria').not().isEmpty(),
    check('Cantidad', 'La Cantidad es obligatoria').isNumeric(),
    check('Cantidad_trabajadores', 'La Cantidad_trabajadores es obligatoria').isNumeric(),
    check('Estado_produccion', 'El Estado_produccion es obligatorio').isIn(['En curso', 'Completado', 'Cancelado']),
    check('Calidad_produccion', 'La Calidad_produccion es obligatoria').isIn(['Excelente', 'Buena', 'Regular', 'Mala']),
    validarCampos
], produccionesControllers.putProduccion);

export default router;