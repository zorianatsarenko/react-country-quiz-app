import Option from "./Option";

function Options({ options, countries }) {
  console.log(options);
  console.log(countries);

  return (
    <div>
      {options.map((option) => {
        return (
          <Option
            country={countries[option].name}
            key={countries[option].numericCode}
          />
        );
      })}
    </div>
  );
}

export default Options;
