import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";
export default function Dictionary(props) {
  const [word, setWord] = useState(props.wordToSearch);
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);
  function getValue(event) {
    setWord(event.target.value);
  }

  function getResponseFromDictionary(response) {
    setResult({
      word: response.data[0].word,
      meanings: response.data[0].meanings,
      origin: response.data[0].origin,
      phonetics: response.data[0].phonetics,
    });
  }

  function getResponseFromPexels(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function search() {
    if (word.length > 0) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      console.log(apiUrl);
      axios.get(apiUrl).then(getResponseFromDictionary);

      axios.get(apiUrl).catch(function (error) {
        alert(`${word} is not found in english dictionary`);
      });

      const pexelApiKey =
        "563492ad6f9170000100000139761edd5c524abdabdedfe91905fd99";
      const header = `Bearer ${pexelApiKey}`;

      let pexelApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
      axios
        .get(pexelApiUrl, { headers: { Authorization: header } })
        .then(getResponseFromPexels);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
