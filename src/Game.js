import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Game.css";
const URL = "https://restcountries.eu/rest/v2/all";

function Game() {
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState([]);
  useEffect(() => {
    fetchData();
    getOptions();
  }, []);
  const fetchData = async () => {
    let response = await axios.get(URL);
    setCountries(response.data);
    const correctOption = Math.floor(Math.random() * countries.length);

    setCorrectOption(correctOption);
    displayData();
  };
  const displayData = () => {
    countries.map((country) => {
      console.log(country.name);
      return <h1>country.name</h1>;
    });
  };
  const getOptions = () => {
    const options = [correctOption];

    while (options.length < 4) {
      let option = Math.floor(Math.random() * countries.length);
      options.push(option);
    }
    setOptions(options);
  };
  return (
    <div className="Game">
      <h1>Game Component</h1>
      <div>sfsdf</div>
      <>blah blah</>
    </div>
  );
}

export default Game;

// src/components/MainContainer.tsx
