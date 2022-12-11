const models = require("../models");

const tileExists = (req, res, next) => {
  models.tile
    .findByCoordinates(req.params.x, req.params.y)
    .then(([rows]) => {
      if (rows.length > 0) {
        next();
      } else {
        res.sendStatus(422);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = tileExists;
