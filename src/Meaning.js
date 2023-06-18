import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>

      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </section>
  );
}
