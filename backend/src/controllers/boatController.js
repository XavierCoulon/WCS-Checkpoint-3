const model = require("../models");

const getBoats = async (req, res) => {
  const { name } = req.query;
  const boats = await model.boat.findName(name);
  res.status(200).json(boats[0]);
};

const updateBoat = async (req, res) => {
  const { id } = req.params;
  const { coord_x, coord_y } = req.body;
  await model.boat.updateBoat(coord_x, coord_y, id);
  res.status(204).json({ coord_x, coord_y, id });
};

module.exports = {
  getBoats,
  updateBoat,
};
