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
        <h1 className="poke-title"> {props.name} </h1>
        <img className="poke-image" src={pokeImgSrc} alt={props.name} />
        <div className="poke-data"> {props.type} </div>
        <div className="pokecard-data"> {props.exp} </div>
      </div>
    );
  }
}

export default Pokecard;
