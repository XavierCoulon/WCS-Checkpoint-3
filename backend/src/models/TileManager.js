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

  findByCoordinates(x, y) {
    return this.connection.query(
      `select id, type, coord_x, coord_y, has_treasure from  ${this.table} where coord_x = ? and coord_y = ?`,
      [x, y]
    );
  }

  getRandomIsland() {
    return this.connection.query(
      `select id, type, coord_x, coord_y from  ${this.table} order by rand() limit 1`
    );
  }
}

module.exports = TileManager;
