const express = require("express");

const router = express.Router();

const boatControllers = require("./controllers/boatControllers");
const tileControllers = require("./controllers/tileControllers");
const checkTreasure = require("./services/checkTreasure");
const tileExists = require("./services/tileExists");

router.get("/tiles", tileControllers.browse);

router.get("/boat", boatControllers.get);
router.put("/boat/move/:x/:y", tileExists, checkTreasure, boatControllers.move);

module.exports = router;
