import { useState } from "react";
import "./Options.css";
function Option(props) {
  return (
    <>
      <div
        className="Option"
        disabled={props.isDisabled}
        style={{
          backgroundColor: props.showAnswer
            ? props.isCorrect
              ? "green"
              : "red"
            : "",
        }}
        className="Option"
        onClick={() => props.handleClick(props.id)}
      >
        {props.country}
      </div>
    </>
  );
}

export default Option;
