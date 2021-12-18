import React from "react";
import Synonyms from "./Synonyms";
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
                <p className="mt-2" style={{ lineHeight: "1.5" }}>
                  {" "}
                  • {element.definition}
                </p>

                <div>
                  {" "}
                  <em className="text-muted">"{element.example}"</em>{" "}
                </div>

                <div>
                  <Synonyms synonyms={element.synonyms} />
                </div>
              </div>
            );
          } else
            return (
              <div key={index}>
                <div>
                  <p style={{ lineHeight: "1.5" }}>• {element.definition}</p>
                </div>
                <div>
                  <Synonyms synonyms={element.synonyms} />
                </div>
              </div>
            );
        })}{" "}
      </div>
    </div>
  );
}
