const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findName(name) {
    return this.connection.query(
      `select b.id, b.name, b.coord_x, b.coord_y, t.type, t.has_treasure from ${this.table} as b join tile as t on b.coord_x = t.coord_x and b.coord_y = t.coord_y  where name = ?`,
      [name]
    );
  }

  updateBoat(coord_x, coord_y, id) {
    return this.connection.query(
      "update boat set coord_x = ?, coord_y = ? where id = ?",
      [coord_x, coord_y, id]
    );
  }
}

module.exports = BoatManager;
