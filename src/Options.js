import Option from "./Option";

function Options({ options, countries, correct, handleClick }) {
  console.log(options);

  return (
    <div>
      {options.map((option) => {
        return (
          <Option
            id={option}
            country={countries[option].name}
            key={countries[option].numericCode}
            isCorrect={correct === option}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default Options;
