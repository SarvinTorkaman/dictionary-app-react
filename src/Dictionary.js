import React, { useState } from "react";
export default function Dictionary() {
  let [word, setWord] = useState("");
  function getValue(event) {
    setWord(event.target.value);
  }

  function getWord(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
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
