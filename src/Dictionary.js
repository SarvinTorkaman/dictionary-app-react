import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  function getValue(event) {
    setWord(event.target.value);
  }

  function getResponse(response) {
    // console.log(response.data[0]);
    // console.log(response.data);
    // console.log(response.data[0].meanings[0]);
    // console.log(response.data[0].phonetics[0]);
    // console.log(response.data[0].origin);
    // console.log(response.data[0].word);
    setResult({
      word: response.data[0].word,
      meanings: response.data[0].meanings,
      origin: response.data[0].origin,
      audio: response.data[0].phonetics[0].audio,
      text: response.data[0].phonetics[0].text,
    });
    // console.log(result.word);
    // console.log(result.meanings);
    // console.log(result.origin);
    // console.log(result.audio);
    // console.log(result.text);

    //  console.log(response.data[0].meanings);
  }
  function getWord(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev
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
}
