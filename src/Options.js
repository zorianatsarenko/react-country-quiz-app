import Option from "./Option";
import "./Options.css";
function Options({
  options,
  countries,
  correct,
  handleClick,
  showAnswers,
  isDisabled,
  selected,
  isCorrect,
}) {
  console.log(options);

  return (
    <div className="Options">
      {options.map((option) => {
        return (
          <Option
            isDisabled={isDisabled}
            showAnswers={showAnswers}
            id={option}
            country={countries[option].name}
            key={countries[option].numericCode}
            isCorrect={isCorrect}
            correct={correct}
            handleClick={handleClick}
            selected={selected}
          />
        );
      })}
    </div>
  );
}

export default Options;
