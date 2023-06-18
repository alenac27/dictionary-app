import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2>{props.results.word}</h2>
          <h3>
            <em>{props.results.phonetic}</em>
          </h3>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
