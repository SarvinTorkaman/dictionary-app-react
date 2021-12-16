import React from "react";
// import speak from "./speak.png";

export default function Result(props) {
  // console.log(props.result.meanings[0]);
  // let [loaded, setLoaded] = useState(false);
  //console.log(props.result.meanings);

  // useEffect(() => {
  //   setLoaded(true);
  // }, [props.result.word]);
  function speak() {
    var audio = new Audio(props.result.audio);
    audio.play();
  }

  if (props.result) {
    if (typeof props.result === "object") {
      return (
        <div className="Result p-3 m-4">
          <h2>{props.result.word}</h2>

          <img
            src={require("./speak.png").default}
            alt="Speak"
            className="speaker-img img-fluid pb-1 ps-2"
            width="38"
            onClick={speak}
          />
          <h5 className="m-1 mt-3 mb-3">/{props.result.text}/</h5>

          <div>
            {props.result.meanings.map((element, index) => {
              return (
                <div className="card m-2 p-3" key={index}>
                  <h3 className="mt-3">{element.partOfSpeech}</h3>

                  <div>
                    {" "}
                    {element.definitions.map((element, index) => {
                      if (element.example !== undefined) {
                        return (
                          <div key={index}>
                            <p className="mt-3"> ● {element.definition}</p>

                            <div>
                              {" "}
                              <em className="text-muted">
                                "{element.example}"
                              </em>{" "}
                            </div>
                          </div>
                        );
                      } else
                        return (
                          <div key={index}>
                            <p>{element.definition}</p>
                          </div>
                        );
                    })}{" "}
                  </div>
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
