import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import "./images/dictionaryLogo.png";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("sunset");
  const [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    // console.log(response.data[0])
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function search(event) {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <img src="src/images/dictionaryLogo.png" alt="logo" />
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeyWordChange} />
          </form>
          <div className="hint"> suggested words: alien, star, quirky...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
