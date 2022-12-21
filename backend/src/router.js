const express = require("express");
const { getBoats } = require("./controllers/boatController");
const { updateBoat } = require("./controllers/boatController");
const { startGame } = require("./controllers/gameController");
const { getTiles } = require("./controllers/tileController");
const { tileExists } = require("./services/tileExists");

const router = express.Router();

router.get("/tiles", getTiles);
router.get("/tiles");
router.get("/boats", getBoats);
router.put("/boats/:id", tileExists, updateBoat);
router.post("/games", startGame);

module.exports = router;
