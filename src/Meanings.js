import React from "react";

export default function Meanings(props) {
  return (
    <div>
      <h3 className="mt-3">{props.meanings.partOfSpeech}</h3>

      <div>
        {" "}
        {props.meanings.definitions.map((element, index) => {
          if (element.example !== undefined) {
            return (
              <div key={index}>
                <p className="mt-2"> ● {element.definition}</p>

                <div>
                  {" "}
                  <em className="text-muted">"{element.example}"</em>{" "}
                </div>
              </div>
            );
          } else
            return (
              <div key={index}>
                <p>{props.meanings.definition}</p>
              </div>
            );
        })}{" "}
      </div>
    </div>
  );
}
