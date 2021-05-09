import React, { useState, useEffect } from "react";
import axios from "axios";
function Game() {
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState(undefined);

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(response.data);
    };

    getCountries();
  }, []);

  useEffect(() => {
    let correctChoice = Math.floor(Math.random() * countries.length);
    setCorrectOption(correctChoice);
  }, [countries]);

  useEffect(() => {
    console.log("correct option changes");
    const choices = [];
    choices[0] = correctOption;
    for (let i = 1; i < 4; i++) {
      let choice = Math.floor(Math.random() * countries.length);
      if (choices.indexOf(choice) === -1) {
        choices.push(choice);
      }
    }
    setOptions(choices);
  }, [correctOption]);

  return (
    <div>
      <h1>Guess which country this flag belongs to </h1>
      <button>start a game</button>
    </div>
  );
}

export default Game;
