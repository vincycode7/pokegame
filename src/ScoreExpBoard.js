import React, { Component } from "react";

import "./ScoreExpBoard.css";

class ScoreExpBoard extends Component {
  state = {};
  render() {
    const props = this.props;
    return (
      <div className="ScoreExpBoard-container">
        <h1 className="ScoreExp-msg" style={{ color: props.msg_color }}>
          {" "}
          {props.msg}{" "}
        </h1>
        <p className="ScoreExp-exp"> Total experience : {props.total_exp}</p>
      </div>
    );
  }
}

export default ScoreExpBoard;
