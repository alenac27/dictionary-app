import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let key = "d2b000c63899bdd9d62748ft3o63f2a2";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="search">
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            id="search"
            placeholder="yoga"
            onChange={handleKeywordChange}
          ></input>
          <input type="submit" id="submit-button" value="Search" />
        </form>
        <div className="hint">
          <em>suggested words: sun, love, summer, wine...</em>
        </div>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
