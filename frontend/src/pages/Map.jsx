import { Link } from "react-router-dom";

import { useCaribbean } from "../contexts/CaribbeanContext";

import "./Map.css";

import boatImage from "../assets/boat.png";

function Map() {
  const { boat, tiles } = useCaribbean();

  if (boat && boat.isJackRich) {
    alert("let's drink a bottle of rhum");
  }

  return (
    <div className="container-fluid">
      <h1>Map</h1>
      <div className="row">
        <div className="col-md-10">
          <div className="map">
            {tiles.length === 0 ? (
              <div className="alert alert-warning">
                You are still on the firm ground, you have to fill the database
                first !
              </div>
            ) : (
              <div className="row">
                {tiles.map((tile) => (
                  <div className={`tile col-1 ${tile.type}`} key={tile.id}>
                    <div className="tile-name">{tile.name}</div>
                    <div className="tile-name coords">
                      {tile.coord_x},{tile.coord_y}
                    </div>
                    {boat?.coord_x === tile.coord_x &&
                      boat?.coord_y === tile.coord_y && (
                        <img
                          className="boat img-fluid"
                          src={boatImage}
                          alt="boat"
                        />
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-2">
          <div className="infos">
            <h2>Information</h2>
            {/* Add here informations about current ship position */}
            {boat && (
              <dl>
                <dt>x</dt>
                <dl>{boat.coord_x}</dl>
                <dt>y</dt>
                <dl>{boat.coord_y}</dl>
                <dt>type</dt>
                <dl>{boat.type}</dl>
              </dl>
            )}
          </div>
          <div className="navigation">
            <h2>Navigation</h2>
            {/* Add here N/S/E/W links */}
            {boat && (
              <>
                <Link to={`/boat/move/${boat.coord_x}/${boat.coord_y - 1}`}>
                  N
                </Link>
                <Link to={`/boat/move/${boat.coord_x}/${boat.coord_y + 1}`}>
                  S
                </Link>
                <Link to={`/boat/move/${boat.coord_x + 1}/${boat.coord_y}`}>
                  E
                </Link>
                <Link to={`/boat/move/${boat.coord_x - 1}/${boat.coord_y}`}>
                  W
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
