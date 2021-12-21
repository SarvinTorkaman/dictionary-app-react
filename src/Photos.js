import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos card m-2 p-3">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div key={index} className="col-4  ">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={props.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
