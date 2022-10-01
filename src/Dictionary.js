import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("sunset");
  const [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    // console.log(response.data[0])
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    //console.log(response);
    setPhotos(response.data.photos);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  let pexelsApiKey = "563492ad6f9170000100000157e22631d7f54f8db1a07ae59c04f4e0";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=1`;
  let headers = { Authorization: `Bearer ${pexelsApiKey}` };
  axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="row">
          <section className="col-6 searchBar">
            <form onSubmit={handleSubmit}>
              <input type="search" onChange={handleKeyWordChange} />
            </form>
            <div className="hint"> suggested words: alien, star, cherry...</div>
          </section>
          <div></div>
          <Photos photos={photos} />
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
