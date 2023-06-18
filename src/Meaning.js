import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">
        <em>{props.meaning.example}</em>
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
