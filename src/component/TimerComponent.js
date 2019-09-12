import React from 'react';
import { Timer } from 'easytimer.js';

import TimerChild from "./TimerChild";

class TimerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.timer1 = new Timer();

    this.state = {
      timerValue: '',
      str: 'サンプル',
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timer1.start();
    this.timer1.addEventListener('secondsUpdated', () => {
      this.setState({
        timerValue: this.timer1.getTimeValues().toString()
      })
    })
  }
  render() {
    return (
      <div className='wrap'>
        <p id='js-countup'>{this.state.timerValue}</p>
        <TimerChild val={this.state.timerValue} />
      </div>
    )
  }
}

export default TimerComponent
