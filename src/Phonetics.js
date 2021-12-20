import React from "react";

export default function Phonetics(props) {
  // console.log(props.phonetics);

  return (
    <div>
      {props.phonetics.map((phonetic, index) => {
        return (
          <span key={index}>
            <h5 className=" d-inline ps-1 m-1 mt-3 mb-3">/{phonetic.text}/</h5>
          </span>
        );
      })}
    </div>
  );
}
