const express = require("express");

const router = express.Router();

const boatControllers = require("./controllers/boatControllers");
const tileControllers = require("./controllers/tileControllers");

router.get("/tiles", tileControllers.browse);

router.get("/boat", boatControllers.get);
router.put("/boat/move/:x/:y", boatControllers.move);

module.exports = router;
