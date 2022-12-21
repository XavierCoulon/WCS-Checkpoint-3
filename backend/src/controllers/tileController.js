const model = require("../models");

const getTiles = async (req, res) => {
  const tiles = await model.tile.findAll();
  res.status(200).json(tiles[0]);
};

module.exports = {
  getTiles,
};
