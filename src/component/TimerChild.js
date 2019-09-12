import React from 'react';

class TimerChild extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.val}</p>
      </div>
    )
  }
}

export default TimerChild
