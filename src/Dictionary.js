import React, { useState } from "react";
import axios from "axios";
export default function Dictionary() {
  let [word, setWord] = useState("");
  function getValue(event) {
    setWord(event.target.value);
  }

  function getResponse(response) {
    console.log(response.data);
  }
  function getWord(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getResponse);
  }

  return (
    <div className="Dictionary">
      <form className="" onSubmit={getWord}>
        <div className="d-sm-flex justify-content-center d-block">
          <input
            type="text"
            className="form-control input-box"
            onChange={getValue}
            placeholder="enter any word"
            autoFocus={true}
          />
          <input
            type="submit"
            className="form-control btn-success shadow"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
}
