import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  //  console.log(props.meaning);
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>;
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>
                <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
