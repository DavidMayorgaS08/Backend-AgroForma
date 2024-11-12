import { Router } from "express";
import siembrasControllers from "../controllers/siembras.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import siembrasHelpers from "../helpers/siembras.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/", [validarJWT, validarCampos], siembrasControllers.getSiembras);

router.get(
    "/:id",
    [
        validarJWT,
        check("id", "El id no es válido").isMongoId(),
        check("id").custom(siembrasHelpers.validarId),
        validarCampos,
    ],
    siembrasControllers.getSiembra
);

router.post(
    "/",
    [
        validarJWT,
        check("Id_finca", "El Id_finca es obligatorio").isMongoId(),
        check("Id_finca").custom(siembrasHelpers.validarFincas),
        check("Id_cultivo", "El Id_cultivo es obligatorio").isMongoId(),
        check("Id_cultivo").custom(siembrasHelpers.validarCultivos),
        check("Responsable", "El Responsable es obligatorio").not().isEmpty(),
        check("Fecha_siembra", "La Fecha_siembra es obligatoria").isDate(),
        check("Cantidad", "La Cantidad es obligatoria").isNumeric(),
        check("Id_semillas", "El Id_semillas es obligatorio").isMongoId(),
        check("Id_semillas").custom(siembrasHelpers.validarSemillas),
        validarCampos,
    ],
    siembrasControllers.postSiembra
);

router.put(
    "/:id",
    [
        validarJWT,
        check("id", "El id no es válido").isMongoId(),
        check("id").custom(siembrasHelpers.validarId),
        check("Id_finca", "El Id_finca es obligatorio").isMongoId(),
        check("Id_finca").custom(siembrasHelpers.validarFincas),
        check("Id_cultivo", "El Id_cultivo es obligatorio").isMongoId(),
        check("Id_cultivo").custom(siembrasHelpers.validarCultivos),
        check("Responsable", "El Responsable es obligatorio").not().isEmpty(),
        check("Fecha_siembra", "La Fecha_siembra es obligatoria").isDate(),
        check("Cantidad", "La Cantidad es obligatoria").isNumeric(),
        check("Id_semillas", "El Id_semillas es obligatorio").isMongoId(),
        check("Id_semillas").custom(siembrasHelpers.validarSemillas),
        validarCampos,
    ],
    siembrasControllers.putSiembra
);

export default router;

