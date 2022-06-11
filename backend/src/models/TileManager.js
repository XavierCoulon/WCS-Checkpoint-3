const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  findAll() {
    return this.connection.query(
      `select id, type, coord_x, coord_y from  ${this.table}`
    );
  }
}

module.exports = TileManager;
