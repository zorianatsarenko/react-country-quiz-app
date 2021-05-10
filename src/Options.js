import Option from "./Option";

function Options({ options, countries, correct }) {
  console.log(options);
  console.log(countries);

  return (
    <div>
      {options.map((option) => {
        return (
          <Option
            country={countries[option].name}
            key={countries[option].numericCode}
            isCorrect={correct === option}
          />
        );
      })}
    </div>
  );
}

export default Options;
