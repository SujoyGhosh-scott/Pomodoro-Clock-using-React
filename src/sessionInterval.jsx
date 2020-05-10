import React from "react";

function SessionInterval(props) {
  function decraseCounter() {
    if (props.sessionInterval === 1) return;
    props.decreaseSessionlength();
  }

  function increaseCounter() {
    if (props.sessionInterval === 60) return;
    props.increaseSessionlength();
  }

  return (
    <div className="intervals">
      <h3>Session Length</h3>
      <button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decraseCounter}
      >
        Down
      </button>
      <p>{props.sessionInterval}</p>
      <button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseCounter}
      >
        Up
      </button>
    </div>
  );
}

export default SessionInterval;
