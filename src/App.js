import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <header className="App-header text-center"> Dictionary App</header>
      <div className="container">
        <main>
          <Dictionary />{" "}
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
