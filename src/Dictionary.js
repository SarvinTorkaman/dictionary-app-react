import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
export default function Dictionary(props) {
  const [word, setWord] = useState(props.wordToSearch);
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState(null);
  function getValue(event) {
    setWord(event.target.value);
  }

  function getResponse(response) {
    setResult({
      word: response.data[0].word,
      meanings: response.data[0].meanings,
      origin: response.data[0].origin,
      phonetics: response.data[0].phonetics,
    });
  }

  function search() {
    if (word.length > 0) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      console.log(apiUrl);
      axios.get(apiUrl).then(getResponse);

      axios.get(apiUrl).catch(function (error) {
        alert(`${word} is not found in english dictionary`);
      });
    } else {
      alert("Enter a word");
    }
  }

  function getWord(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form className="" onSubmit={getWord}>
          <div className="d-sm-flex justify-content-center mb-4 d-block">
            <input
              type="text"
              className="search-box form-control input-box "
              onChange={getValue}
              placeholder="Enter a word"
              autoFocus={true}
            />
            <input
              type="submit"
              className="form-control d-none d-sm-block btn-success shadow"
              value="Search"
            />
          </div>
        </form>

        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
