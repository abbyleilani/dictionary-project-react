import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("alien");
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

  function search(event) {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001281ec43e36c246d79e5039db049e6023";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <div className="row">
          <section className="col-6 searchBar">
            <form onSubmit={handleSubmit}>
              <input type="search" onChange={handleKeyWordChange} />
            </form>
            <div className="hint"> suggested words: alien, star, cherry...</div>
          </section>
          <div>
            <Photos photos={photos} />
          </div>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
