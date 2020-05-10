import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
    };
  }

  play = () => {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.onPlayTimer(true);
    this.setState({
      intervalId: intervalId,
    });
  };

  decreaseTimer = () => {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });
            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.toggleInterval(this.state.isSession);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSecond: 59,
          });
        }
        break;
      default:
        this.setState({
          timerSecond: this.state.timerSecond - 1,
        });
    }
  };

  stop = () => {
    clearInterval(this.state.intervalId);
    this.props.onPlayTimer(false);
  };

  reset = () => {
    this.stop();
    this.props.resetTimer();
    this.props.onPlayTimer(false);
    this.setState({
      isSession: true,
      timerSecond: 0,
    });
  };

  render() {
    return (
      <div className="timer">
        <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
        <span>{this.props.timerMinute}</span>:
        <span>
          {this.state.timerSecond === 0
            ? "00"
            : this.state.timerSecond < 10
            ? "0" + this.state.timerSecond
            : this.state.timerSecond}
        </span>
        <div className="timer-buttons">
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
