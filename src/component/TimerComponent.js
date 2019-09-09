import React from 'react';
import { Timer } from 'easytimer.js';

class TimerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer1: new Timer(),
      timerValue: '',
      str: 'サンプル',
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.state.timer1.start();
    this.state.timer1.addEventListener('secondsUpdated', () => {
      this.setState({
        timerValue: this.state.timer1.getTimeValues().toString()
      })
    })
  }
  render() {
    return (
      <div className='wrap'>
        <p id='js-countup'>{this.state.timerValue}</p>
      </div>
    )
  }
}

export default TimerComponent
