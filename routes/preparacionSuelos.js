import { Router } from "express";
import preparacionSuelosControllers from "../controllers/preparacionSuelos.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import preparacionSuelosHelpers from "../helpers/preparacionSuelos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
] ,preparacionSuelosControllers.getPreparacionSuelos);

router.get('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(preparacionSuelosHelpers.validarId),
    validarCampos
], preparacionSuelosControllers.getPreparacionSuelo);

router.post('/',[
    validarJWT,
    check('Id_finca', 'El Id_finca es obligatorio').not().isEmpty(),
    check('Id_finca').custom(preparacionSuelosHelpers.validarFincas),
    check('Id_finca', 'El Id_finca no es válido').isMongoId(),
    check('Fecha', 'La Fecha es obligatoria').not().isEmpty(),
    check('Fecha', 'La Fecha no es válida').isISO8601(),
    check('Id_parcela', 'El Id_parcela es obligatorio').not().isEmpty(),
    check('Id_parcela', 'El Id_parcela no es válido').isMongoId(),
    check('Id_parcela').custom(preparacionSuelosHelpers.validarParcelas),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Productos', 'Los Productos son obligatorios').isArray({ min: 1 }),
    check('Productos.*.Ingrediente_activo', 'El Ingrediente_activo es obligatorio').not().isEmpty(),
    check('Productos.*.Dosis', 'La Dosis es obligatoria').not().isEmpty(),
    check('Productos.*.Metodo_aplicacion', 'El Metodo_aplicacion es obligatorio').not().isEmpty(),
    check('Estado_suelo', 'El Estado_suelo es obligatorio').not().isEmpty(),
    check('Estado_suelo', 'El Estado_suelo no es válido').isIn(['Necesita trabajo', 'Buenas condiciones']),
    validarCampos], preparacionSuelosControllers.postPreparacionSuelo);

router.put('/:id',[
    validarJWT,
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(preparacionSuelosHelpers.validarId),
    check('Id_finca', 'El Id_finca es obligatorio').not().isEmpty(),
    check('Id_finca').custom(preparacionSuelosHelpers.validarFincas),
    check('Id_finca', 'El Id_finca no es válido').isMongoId(),
    check('Fecha', 'La Fecha es obligatoria').not().isEmpty(),
    check('Fecha', 'La Fecha no es válida').isISO8601(),
    check('Id_parcela', 'El Id_parcela es obligatorio').not().isEmpty(),
    check('Id_parcela', 'El Id_parcela no es válido').isMongoId(),
    check('Id_parcela').custom(preparacionSuelosHelpers.validarParcelas),
    check('Responsable', 'El Responsable es obligatorio').not().isEmpty(),
    check('Productos', 'Los Productos son obligatorios').isArray({ min: 1 }),
    check('Productos.*.Ingrediente_activo', 'El Ingrediente_activo es obligatorio').not().isEmpty(),
    check('Productos.*.Dosis', 'La Dosis es obligatoria').not().isEmpty(),
    check('Productos.*.Metodo_aplicacion', 'El Metodo_aplicacion es obligatorio').not().isEmpty(),
    check('Estado_suelo', 'El Estado_suelo es obligatorio').not().isEmpty(),
    check('Estado_suelo', 'El Estado_suelo no es válido').isIn(['Necesita trabajo', 'Buenas condiciones']),
    validarCampos], preparacionSuelosControllers.putPreparacionSuelo);

export default router;