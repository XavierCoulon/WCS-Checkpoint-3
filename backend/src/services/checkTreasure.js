const models = require("../models");

const checkTreasure = (req, res, next) => {
  models.tile
    .findByCoordinates(req.params.x, req.params.y)
    .then(([rows]) => {
      if (rows.length > 0) {
        req.isJackRich = rows[0].has_treasure;

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

module.exports = checkTreasure;
