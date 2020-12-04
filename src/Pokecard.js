import React, { Component } from "react";

import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// function format_pokeimg_id(id) {
//   // perform logic
//   var result_id = id;
//   console.log("why na");
//   console.log(result_id);
//   return result_id;
// }
class Pokecard extends Component {
  state = {};

  render() {
    var props = this.props;
    console.log(props);
    var pokeImgSrc = `${POKE_API}${props.pokeImageId}.png`;
    console.log("wahala");
    return (
      <div
        className="Pokecard-container"
        style={{
          width: props.Pokecard_width,
          height: props.Pokecard_height,
          backgroundColor: props.Pokecard_backgroundColor,
        }}
      >
        <h1 className="Poke-name"> {props.pokeName} </h1>
        <img className="Poke-image" src={pokeImgSrc} alt={props.name} />
        <div className="Poke-type"> {props.pokeType} </div>
        <div className="Poke-experience"> {props.pokeExperience} </div>
      </div>
    );
  }
}

export default Pokecard;
