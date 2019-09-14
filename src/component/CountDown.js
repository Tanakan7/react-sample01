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

    this._stopCountDown = this._stopCountDown.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount CountDonw');
    this.timer1.start({ countdown: true, startValues: { seconds: 10 } });
    this.timer1.addEventListener('secondsUpdated', () => {
      this.setState({
        timerValue: this.timer1.getTimeValues().toString()
      })
    })

    this.timer1.addEventListener('targetAchieved', () => {
      console.log('タイマー終了')
    })
  }

  _stopCountDown() {
    // this._stopCountDown = this._stopCountDown.bind(this) コンストラクタでこれやってないとエラー
    // this.なんとか のなかで this.ほげほげ を呼び出すときは必要っぽい？
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
        <button onClick={this._stopCountDown}>ストップ</button>
      </div>
    )
  }
}

export default CountDown
