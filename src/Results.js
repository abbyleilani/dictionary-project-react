import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results row">
        <section className="col-4">
          <h2> {props.results.word} </h2>
          {props.results.phonetics
            .filter((phonetic) => phonetic.audio !== "")
            .map(function (phonetic, index) {
              return (
                <div key={index}>
                  {" "}
                  <Phonetic phonetic={phonetic} />{" "}
                </div>
              );
            })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index} className="col-4">
              <Meaning meaning={meaning} />{" "}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
