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
    // カウントダウンタイマー開始
    this.timer1.start({
      precision: 'secondTenths',
      countdown: true,
      startValues: { seconds: 10 },
    });
    // 100msおきに実行される処理を設定
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
        <p>{this.state.timerValue}.{this.state.milliSecond}</p>
        <button onClick={this._stopCountDown}>ポーズ・再開</button>
      </div>
    )
  }
}

export default CountDown
