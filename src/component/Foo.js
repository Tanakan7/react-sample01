import React from "react";

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "FooComponent!",
    };

    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this.time = setInterval(() => {
      console.log('a')
    }, 1000)
  }

  _handleClick() {
    console.log("clicked!");
    clearInterval(this.time)
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

export default Foo;
