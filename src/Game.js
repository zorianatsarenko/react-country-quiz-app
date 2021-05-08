import axios from "axios";
import React, { useState, useEffect } from "react";

const URL = "https://restcountries.eu/rest/v2/all";

function Game() {
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let response = await axios.get(URL);
    setCountries(response.data);
    displayData();
  };
  const displayData = () => {
    countries.map((country) => {
      console.log(country.name);
      return <h1>country.name</h1>;
    });
  };
  return (
    <div>
      <h1>Game Component</h1>
    </div>
  );
}

export default Game;

// src/components/MainContainer.tsx
