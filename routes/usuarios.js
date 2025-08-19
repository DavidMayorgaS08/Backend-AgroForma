import { Router } from "express";
import usuariosControllers from "../controllers/usuarios.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import usuariosHelpers from "../helpers/usuarios.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/", [validarJWT, validarCampos], usuariosControllers.getUsuarios);

router.get(
  "/:id",
  [
    validarJWT,
    check("id", "El id no es válido").isMongoId(),
    check("id").custom(usuariosHelpers.validarId),
    validarCampos,
  ],
  usuariosControllers.getUsuario
);

router.post(
  "/",
  [
    validarJWT,
    check("Nombre", "El nombre es obligatorio").not().isEmpty(),
    check("Apellido", "El apellido es obligatorio").not().isEmpty(),
    check("Documento", "El documento es obligatorio").not().isEmpty(),
    check("Documento").custom(usuariosHelpers.validarDocumentoUnico),
    check("Telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("Direccion", "La dirección es obligatoria").not().isEmpty(),
    check("Email", "El email es obligatorio").isEmail(),
    check("Email").custom(usuariosHelpers.validarEmailUnico),
    check("Password", "La contraseña es obligatoria").not().isEmpty(),
    check("Municipio", "El municipio es obligatorio").not().isEmpty(),
    check("Rol", "El rol es obligatorio").isIn([
      "adminFull",
      "admin",
      "trabajador",
    ]),
    validarCampos,
  ],
  usuariosControllers.postUsuario
);

router.put(
  "/:id",
  [
    validarJWT,
    check("id", "El id no es válido").isMongoId(),
    check("id").custom(usuariosHelpers.validarId),
    check("Nombre", "El nombre es obligatorio").not().isEmpty(),
    check("Apellido", "El apellido es obligatorio").not().isEmpty(),
    check("Documento", "El documento es obligatorio").not().isEmpty(),
    check("Telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("Direccion", "La dirección es obligatoria").not().isEmpty(),
    check("Email", "El email es obligatorio").isEmail(),
    check("Password", "La contraseña es obligatoria").not().isEmpty(),
    check("Municipio", "El municipio es obligatorio").not().isEmpty(),
    check("Rol", "El rol es obligatorio").isIn([
      "adminFull",
      "admin",
      "trabajador",
    ]),
    validarCampos,
  ],
  usuariosControllers.putUsuario
);
router.put(
  "/envio/email",
  [check("correo", "Debe proporcionar el correo").trim().not().isEmpty()],
  usuariosControllers.enviarRecuperacion
);

router.put(
  "/nueva/contrasena",
  [
    check("nuevaContrasena", "La contraseÃ±a debe tener al menos 8 caracteres")
      .trim()
      .isLength({ min: 8 }),
  ],
  usuariosControllers.recuperarContrasena
);

export default router;