import React from "react";

class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "BlankComponent!"
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    console.log("clicked!");
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.state.str}</p>
        <button onClick={this._handleClick}>ボタン</button>
      </React.Fragment>
    );
  }
}

export default Blank;
