import React from 'react';

class Hoge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      str: 'hoge1'
    }
  }
  render() {
    return <p>{this.state.str}</p>
  }
}

export default Hoge
