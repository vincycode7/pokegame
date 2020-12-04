import React, { Component } from "react";

import "./Pokedex.css";
import ScoreExpBoard from "./ScoreExpBoard";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: "004", name: "Charmander", type: "fire", base_experience: 62 },
      { id: "007", name: "Squirtle", type: "water", base_experience: 63 },
      { id: "011", name: "Metapod", type: "bug", base_experience: 72 },
      { id: "012", name: "Butterfree", type: "flying", base_experience: 178 },
      { id: "025", name: "Pikachu", type: "electric", base_experience: 112 },
      { id: "039", name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: "094", name: "Gengar", type: "poison", base_experience: 225 },
      { id: "133", name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    var props = this.props;

    return (
      <div className="Pokedex">
        <h1> Pokedex </h1>
        <div className="Pokedex-cards">
          {props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
