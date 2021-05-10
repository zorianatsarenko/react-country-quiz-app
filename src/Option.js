function Option(props) {
  return (
    <>
      <div
        disabled={props.isDisabled}
        style={{
          backgroundColor: props.showAnswers
            ? props.isCorrect
              ? "lightgreen"
              : "tomato"
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
