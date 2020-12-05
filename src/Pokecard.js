import React, { Component } from "react";

import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  state = {};

  render() {
    var props = this.props;
    var pokeImgSrc = `${POKE_API}${padToThree(props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title"> {props.name} </h1>
        <div className="Pokecard-image">
          <img src={pokeImgSrc} alt={props.name} />
        </div>
        <div className="Pokecard-data"> {props.type} </div>
        <div className="Pokecard-data"> {props.exp} </div>
      </div>
    );
  }
}

export default Pokecard;
