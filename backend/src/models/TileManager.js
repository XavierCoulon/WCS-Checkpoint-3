const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  findTile(x, y) {
    return this.connection.query(
      "select * from tile where coord_x = ? and coord_y = ?",
      [x, y]
    );
  }

  resetTreasure() {
    return this.connection.query("update tile set has_treasure = 0");
  }

  hideTreasure() {
    return this.connection.query(
      "update tile set has_treasure = 1 order by rand() limit 1"
    );
  }
}

module.exports = TileManager;
