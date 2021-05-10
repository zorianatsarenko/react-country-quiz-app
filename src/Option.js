import "./Options.css";
function Option(props) {
  return (
    <>
      <div
        className="Option"
        disabled={props.isDisabled}
        style={{
          backgroundColor: props.showAnswers
            ? props.isCorrect
              ? "#4c915f"
              : "#de182c"
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
