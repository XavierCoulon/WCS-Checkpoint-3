const model = require("../models");

const tileExists = async (req, res, next) => {
  const { coord_x, coord_y } = req.body;
  const tiles = await model.tile.findTile(coord_x, coord_y);
  if (tiles[0].length === 0) {
    return res.status(422);
  }
  next();
};

module.exports = {
  tileExists,
};
