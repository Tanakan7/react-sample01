import React from 'react';
import { Timer } from 'easytimer.js';

class Hoge extends React.Component {
  constructor(props) {
    super(props)
    // this.timer = new Timer();
    this.state = {
      str: 'hoge1'
    }
  }
  // _addCountUp() {
  //   this.timer.start();
  //   this.timer.addEventListener('secondsUpdated', () => {
  //     const el = document.getElementById('js-timer')
  //     el.innerHTML = timer.getTimeValues().toString()
  //   })
  // }
  render() {
    return <p>{this.state.str}</p>
  }
}

export default Hoge
