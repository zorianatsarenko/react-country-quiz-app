import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Game.css";
import Options from "./Options";

function Game() {
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState(undefined);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

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

  function handleClick(element) {
    if (element === correctOption) {
      setScore(score + 1);
    } else {
      setGameOver(true);
    }
  }

  function handleNextClick() {
    //chnage option?
    setCorrectOption(Math.floor(Math.random() * countries.length));
  }

  if (countries.length < 1) {
    return <h1>Loading</h1>;
  }

  if (!gameOver) {
    return (
      <div className="Game">
        <h1>Guess which country this flag belongs to </h1>

        <img
          style={{ width: "100%" }}
          src={countries[correctOption].flag}
        ></img>
        <Options
          options={options}
          countries={countries}
          correct={correctOption}
          handleClick={handleClick}
        />
        <button onClick={() => handleNextClick()}>next</button>
        <div>{score} guessed</div>
      </div>
    );
  }
  return (
    <div className="Game">
      <h1>Not Bad want to try again?</h1>
      <button>try again</button>
      <div>{score} guessed</div>
    </div>
  );
}

export default Game;
