import React from 'react';

class Ref extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    console.log(this.props.str);
    // 親のstateを変更する!
    this.props.increment();
  }

  render() {
    return (
      <React.Fragment>
        <p>Refコンポーネント</p>
        <button onClick={this._handleClick}>Refボタン</button>
      </React.Fragment>
    )
  }
}

export default Ref
