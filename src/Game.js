import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Game.css";
import Options from "./Options";
import shuffle from "./shuffle";

function Game() {
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState(undefined);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [disabled, setDisabled] = useState(false);
  const [disableNext, setDisableNext] = useState(true);

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
    shuffle(choices);
    setOptions(choices);
  }, [correctOption]);

  function handleClick(element) {
    setDisabled(true);
    if (element === correctOption) {
      setSelected(element);
      setScore(score + 1);
      setShowAnswers(true);
      setDisableNext(false);
    } else {
      setGameOver(true);
    }
  }

  function handleTryAgain() {
    setCorrectOption(Math.floor(Math.random() * countries.length));
    setShowAnswers(false);
    setDisabled(false);
    setGameOver(false);
    setScore(0);
  }

  function handleNextClick() {
    //chnage option?
    setCorrectOption(Math.floor(Math.random() * countries.length));
    setShowAnswers(false);
    setDisabled(false);
    setDisableNext(true);
  }

  if (countries.length < 1) {
    return <h1>Loading</h1>;
  }

  if (!gameOver) {
    return (
      <div className="Game">
        <div className="Game-card">
          <div>{score} guessed</div>
          <h3>Which country does this flag belong to?</h3>

          <img style={{}} src={countries[correctOption].flag}></img>

          <Options
            isDisabled={disabled}
            options={options}
            countries={countries}
            correct={correctOption}
            handleClick={handleClick}
            showAnswers={showAnswers}
            selected={selected}
          />

          <button
            className="Game-next-btn"
            disabled={disableNext}
            onClick={() => handleNextClick()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="Game">
      <div className="Game-card">
        <div>You score is {score}</div>
        <h3>Which country does this flag belong to?</h3>

        <img style={{}} src={countries[correctOption].flag}></img>

        <Options
          isDisabled={disabled}
          options={options}
          countries={countries}
          correct={correctOption}
          handleClick={handleClick}
          showAnswers={showAnswers}
          selected={selected}
        />

        <button
          className="Game-next-btn"
          disabled={false}
          onClick={() => handleTryAgain()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Game;
