const model = require("../models");

const startGame = async (req, res) => {
  await model.boat.updateBoat(1, 1, 1);
  await model.tile.resetTreasure();
  await model.tile.hideTreasure();
  res.status(201).send("OK");
};

module.exports = {
  startGame,
};
