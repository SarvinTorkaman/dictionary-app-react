import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length === 0) {
    return null;
  } else {
    return (
      <div className="d-inline">
        <br />
        Synonyms:{" "}
        {props.synonyms.map((synonym, index) => {
          return (
            <span className="synonyms" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  }
}
