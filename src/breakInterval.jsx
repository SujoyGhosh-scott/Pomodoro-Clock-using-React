import React from "react";

function BreakInterval(props) {
  function decraseCounter() {
    if (props.breakInterval === 1) return;
    props.decreaseBreaklength();
  }

  function increaseCounter() {
    if (props.breakInterval === 30) return;
    props.increaseBreaklength();
  }

  return (
    <div className="intervals">
      <h3>Break Length</h3>
      <button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decraseCounter}
      >
        Down
      </button>
      <p>{props.breakInterval}</p>
      <button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseCounter}
      >
        Up
      </button>
    </div>
  );
}

export default BreakInterval;
