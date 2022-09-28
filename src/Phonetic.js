import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img
          src="./images/phoneticGraphic.png"
          alt="logo"
          className="phoneticGraphic"
        />
        <br />
      </a>
      <div className="phoneticText">
        {"  "}
        {props.phonetic.text}
      </div>
    </div>
  );
}
