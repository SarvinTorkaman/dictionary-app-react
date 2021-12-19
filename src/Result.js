import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Result.css";

export default function Result(props) {
  function speak() {
    var audio = new Audio(props.result.phonetics[0].audio);
    audio.play();
  }

  if (props.result) {
    if (typeof props.result === "object") {
      return (
        <div className="Result ">
          <h2>{props.result.word}</h2>
          <img
            src={require("./speak.png").default}
            alt="Speak"
            className=" speaker-img img-fluid pb-1 ps-2"
            width="38"
            onClick={speak}
          />

          <Phonetics phonetics={props.result.phonetics} />

          {/* <img
            src={require("./speak.png").default}
            alt="Speak"
            className="speaker-img img-fluid pb-1 ps-2"
            width="38"
            onClick={speak}
          />
          <h5 className="m-1 mt-3 mb-3">/{props.result.text}/</h5> */}

          <div>
            {props.result.meanings.map((meanings, index) => {
              return (
                <div className="card m-2 p-3" key={index}>
                  <Meanings meanings={meanings} />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <p>No result for that word</p>;
    }
  } else {
    return <div> </div>;
  }
}
