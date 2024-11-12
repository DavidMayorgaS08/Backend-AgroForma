import { Router } from 'express';
import nominasTrabajadoresControllers from '../controllers/nominasTrabajadores.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import nominasTrabajadoresHelpers from '../helpers/nominasTrabajadores.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], nominasTrabajadoresControllers.getTrabajadores);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasTrabajadoresHelpers.validarId),
    validarCampos
], nominasTrabajadoresControllers.getTrabajador);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasTrabajadoresHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Apellido', 'El Apellido es obligatorio').not().isEmpty(),
    check('Tipo_identificacion', 'El Tipo_identificacion es obligatorio').not().isEmpty(),
    check('Numero_identificacion', 'El Numero_identificacion es obligatorio').not().isEmpty(),
    check('Telefono', 'El Telefono es obligatorio').not().isEmpty(),
    check('Direccion', 'El Direccion es obligatorio').not().isEmpty(),
    check('Metodo_pago', 'El Metodo_pago es obligatorio').not().isEmpty(),
    check('Informacion_bancaria', 'El Informacion_bancaria es obligatorio').not().isEmpty(),
    validarCampos
], nominasTrabajadoresControllers.postTrabajador);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(nominasTrabajadoresHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').isMongoId(),
    check('Id_finca').custom(nominasTrabajadoresHelpers.validarIdFinca),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('Apellido', 'El Apellido es obligatorio').not().isEmpty(),
    check('Tipo_identificacion', 'El Tipo_identificacion es obligatorio').not().isEmpty(),
    check('Numero_identificacion', 'El Numero_identificacion es obligatorio').not().isEmpty(),
    check('Telefono', 'El Telefono es obligatorio').not().isEmpty(),
    check('Direccion', 'El Direccion es obligatorio').not().isEmpty(),
    check('Metodo_pago', 'El Metodo_pago es obligatorio').not().isEmpty(),
    check('Informacion_bancaria', 'El Informacion_bancaria es obligatorio').not().isEmpty(),
    validarCampos
], nominasTrabajadoresControllers.putTrabajador);

export default router;