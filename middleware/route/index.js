const express = require("express");
const router = express.Router();
const timeMiddleware = require("../horaMiddleware");
const validarHora = require("../validarHora");

router.get(`/`, timeMiddleware);
router.get("/endroute", validarHora);

module.exports = router;
