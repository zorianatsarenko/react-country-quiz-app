import { useState } from "react";
import "./Options.css";
function Option(props) {
  console.log(props);

  const classLogic = () => {
    console.log(props.clicked);
    if (
      props.showAnswers &&
      (props.selected === props.id || props.correct === props.id)
    ) {
      if (props.isCorrect || props.correct === props.id) {
        return "green";
      }
      if (!props.isCorrect) {
        return "red";
      } else if (props.correct === props.id) {
        return "green";
      }
    } else {
      return "";
    }
  };

  const classes = `Option ${classLogic()}`;

  return (
    <>
      <div
        className={classes}
        disabled={props.isDisabled}
        onClick={() => props.handleClick(props.id)}
      >
        {props.country}
      </div>
    </>
  );
}

export default Option;
