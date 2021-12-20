import Dictionary from "./Dictionary";
// import React, { useState } from "react";
import "./App.css";

function App() {
  // const [wordToSearch, setWordToSearch] = useState("sunset");

  return (
    <div className="App ">
      <header className="App-header text-center">
        {" "}
        <h1>
          English Dictionary{" "}
          <span className="font-awsome-dictoinary-icon">
            <i className="fas fa-book"></i>
          </span>
        </h1>
      </header>
      <div className="container">
        <main>
          <Dictionary wordToSearch="sunset" />{" "}
        </main>{" "}
      </div>
      <footer className="text-center ">
        Coded by Sarvin and open-sourced at{" "}
        <a
          href="https://github.com/SarvinTorkaman/dictionary-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
