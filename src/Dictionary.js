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

  function search(input) {
    if (input.length > 0) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
      // console.log(apiUrl);
      axios.get(apiUrl).then(getResponse);

      axios.get(apiUrl).catch(function (error) {
        alert(`${input} is not found in english dictionary`);
      });
    } else {
      alert("Enter a word");
    }
  }

  function getWord(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev

    search(word);
  }

  function load() {
    setLoaded(true);

    search(word);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form className=" m-0 p-0" onSubmit={getWord}>
          <div className="d-sm-flex justify-content-center mb-2 mb-sm-4 d-block">
            <input
              type="text"
              className="search-box form-control input-box "
              onChange={getValue}
              placeholder="Enter a word"
              autoFocus={true}
              defaultValue={props.wordToSearch}
            />

            <input
              type="submit"
              className="form-control d-none d-sm-block btn-success shadow"
              value="Search"
            />
          </div>
        </form>
        <small className="w-100  d-flex justify-content-center">
          E.g. Book, Wine , Yoga ,and etc.
        </small>

        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
