import React from 'react';
import Fuga from "./Fuga";
import { thisExpression } from '@babel/types';

class Hoge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
    }

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      val: this.state.val += 1,
    })
  }

  render() {
    return (
      <React.Fragment>
        <p>state.val: {this.state.val}</p>
        <button onClick={this._handleClick}>Hogeボタン</button>
        {/* 値のときはダブルクオート、関数は{}で()なし */}
        <Fuga
          increment={this._handleClick}
          str="aaa"
        />
      </React.Fragment>
    )
  }
}

export default Hoge
