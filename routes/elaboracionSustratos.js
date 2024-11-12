import { Router } from 'express';
import elaboracionSustratosControllers from '../controllers/elaboracionSustratos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import elaboracionSustratosHelpers from '../helpers/elaboracionSustratos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], elaboracionSustratosControllers.getElaboracionSustratos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(elaboracionSustratosHelpers.validarId),
    validarCampos
], elaboracionSustratosControllers.getElaboracionSustrato);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(elaboracionSustratosHelpers.validarIdFinca),
    check('Id_cultivo', 'El Id_cultivo es obligatorio').isMongoId(),
    check('Id_cultivo').custom(elaboracionSustratosHelpers.validarIdCultivo),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Producto_comercial', 'El Producto_comercial es obligatorio').not().isEmpty(),
    check('Ingrediente_activo', 'El Ingrediente_activo es obligatorio').not().isEmpty(),
    check('Dosis', 'La Dosis es obligatoria').isNumeric(),
    check('Metodo_aplicacion', 'El Metodo_aplicacion es obligatorio').not().isEmpty(),
    check('Cantidad_producida', 'La Cantidad_producida es obligatoria').isNumeric(),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    validarCampos
], elaboracionSustratosControllers.postElaboracionSustrato);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(elaboracionSustratosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(elaboracionSustratosHelpers.validarIdFinca),
    check('Id_cultivo', 'El Id_cultivo es obligatorio').isMongoId(),
    check('Id_cultivo').custom(elaboracionSustratosHelpers.validarIdCultivo),
    check('Fecha', 'La Fecha es obligatoria').isISO8601(),
    check('Producto_comercial', 'El Producto_comercial es obligatorio').not().isEmpty(),
    check('Ingrediente_activo', 'El Ingrediente_activo es obligatorio').not().isEmpty(),
    check('Dosis', 'La Dosis es obligatoria').isNumeric(),
    check('Metodo_aplicacion', 'El Metodo_aplicacion es obligatorio').not().isEmpty(),
    check('Cantidad_producida', 'La Cantidad_producida es obligatoria').isNumeric(),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    validarCampos
], elaboracionSustratosControllers.putElaboracionSustrato);

export default router;