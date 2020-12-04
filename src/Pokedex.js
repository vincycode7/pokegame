import React, { Component } from "react";

import "./Pokedex.css";
import ScoreExpBoard from "./ScoreExpBoard";
class Pokedex extends Component {
  state = {};

  render() {
    var props = this.props;
    var pokecards = this.props.pokecards;
    return (
      <div
        className="Pokedex-container"
        style={{
          width: props.Pokedex_width,
          height: props.Pokedex_height,
          backgroundColor: props.Pokedex_backgroundColor,
        }}
      >
        <ScoreExpBoard
          msg_color="red"
          msg="Losing Hand"
          total_exp={0}
          ScoreExpBoard_width="100%"
          // ScoreExpBoard_height="13vh"
        />
        <div className="Poke-card-container"> {pokecards.map((pokecard) => pokecard)} </div>
        
      </div>
    );
  }
}

export default Pokedex;
