import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms.length);
  console.log(props.synonyms);
  if (props.synonyms.length === 0) {
    return null;
  } else {
    return (
      <div className="d-inline">
        <br />
        Synonyms:{" "}
        {props.synonyms.map((synonyms, index) => {
          return (
            <span className="synonyms" key={index}>
              {synonyms}
            </span>
          );
        })}
      </div>
    );
  }
}
