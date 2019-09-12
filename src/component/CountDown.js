import React from 'react';
import { Timer } from 'easytimer.js';

class CountDown extends React.Component {
  constructor(props) {
    super(props)
    this.timer1 = new Timer();

    this.state = {
      timerValue: '',
      str: 'サンプル',
    }
  }

  componentDidMount() {
    console.log('componentDidMount CountDonw');
    this.timer1.start({ countdown: true, startValues: { seconds: 4 } });
    this.timer1.addEventListener('secondsUpdated', () => {
      this.setState({
        timerValue: this.timer1.getTimeValues().toString()
      })
    })

    this.timer1.addEventListener('targetAchieved', () => {
      console.log('タイマー終了')
    })
  }
  render() {
    return (
      <div className='wrap'>
        <p>{this.state.timerValue}</p>
      </div>
    )
  }
}

export default CountDown
