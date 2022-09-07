import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="container">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeyWordChange} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
