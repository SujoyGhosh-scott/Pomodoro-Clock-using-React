import React from "react";
import "./App.css";
import BreakInterval from "./breakInterval";
import SessionInterval from "./sessionInterval";
import Timer from "./timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    };
  }

  increaseBreaklength = () => {
    this.setState({
      breakLength: this.state.breakLength + 1,
    });
  };

  decreaseBreaklength = () => {
    this.setState({
      breakLength: this.state.breakLength - 1,
    });
  };

  increaseSessionlength = () => {
    this.setState({
      sessionLength: this.state.sessionLength + 1,
      timerMinute: this.state.timerMinute + 1,
    });
  };

  decreaseSessionlength = () => {
    this.setState({
      sessionLength: this.state.sessionLength - 1,
      timerMinute: this.state.timerMinute - 1,
    });
  };

  updataTimerMinute = () => {
    this.setState({
      timerMinute: this.state.timerMinute - 1,
    });
    return this.state.timerMinute;
  };

  onToggleInterval = (isSession) => {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  };

  resetTimer = () => {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

  onPlayTimer = (isPlay) => {
    this.setState({
      isPlay: isPlay
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="interval-part">
          <b>
            <BreakInterval
              isPlay={this.state.isPlay}
              breakInterval={this.state.breakLength}
              increaseBreaklength={this.increaseBreaklength}
              decreaseBreaklength={this.decreaseBreaklength}
            />
            <SessionInterval
              isPlay={this.state.isPlay}
              sessionInterval={this.state.sessionLength}
              increaseSessionlength={this.increaseSessionlength}
              decreaseSessionlength={this.decreaseSessionlength}
            />
          </b>
        </div>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.updataTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.resetTimer}
          onPlayTimer={this.onPlayTimer}
        />
      </div>
    );
  }
}

export default App;
