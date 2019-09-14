import React from 'react';

class Fuga extends React.Component {
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
        <p>Fugaコンポーネント</p>
        <button onClick={this._handleClick}>Fugaボタン</button>
      </React.Fragment>
    )
  }
}

export default Fuga
