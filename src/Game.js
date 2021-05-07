import axios from "axios";
import React, { useState, useEffect } from "react";

const URL = "https://restcountries.eu/rest/v2/all";

function Game() {
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await axios.get(URL);
      console.log(response);
    }
    getData();
  });
  return (
    <div>
      <h1>Game Component</h1>
    </div>
  );
}

export default Game;
