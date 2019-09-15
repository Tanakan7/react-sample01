import React from 'react';
import { Timer } from 'easytimer.js';

class CountDown extends React.Component {
  constructor(props) {
    super(props)
    this.timer1 = new Timer();

    this.state = {
      timerValue: '',
      milliSecond: '',
      str: 'サンプル',
    }

    this._stopCountDown = this._stopCountDown.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount CountDonw');
    this.timer1.start({
      precision: 'secondTenths',
      countdown: true,
      startValues: { seconds: 10 },
    });
    this.timer1.addEventListener('secondTenthsUpdated', () => {
      this.setState({
        timerValue: this.timer1
          .getTimeValues()
          .toString(["minutes", "seconds"]),
        milliSecond: this.timer1
          .getTimeValues()
          .toString(['secondTenths']),
      });
    })

    this.timer1.addEventListener('targetAchieved', () => {
      console.log('タイマー終了')
    })
  }

  _stopCountDown() {
    if (this.timer1.isRunning()) {
      this.timer1.pause();
    } else {
      this.timer1.start();
    }
  }

  render() {
    return (
      <div className='wrap'>
        <p>{this.state.timerValue}</p>
        <p>{this.state.milliSecond}</p>
        <button onClick={this._stopCountDown}>ストップ</button>
      </div>
    )
  }
}

export default CountDown
