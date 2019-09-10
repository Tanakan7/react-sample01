import React from 'react';

class Hoge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: 'HogeComponent!'
    }

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    console.log('clicked!');
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.state.str}</p>
        <button onClick={this._handleClick}>ボタン</button>
      </React.Fragment>
    )
  }
}

export default Hoge
