import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <DictionarySearch defaultKeyword="countryside" />
        <footer className="App-footer">
          <a
            href="https://github.com/TessBReid/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Tessa Bailey-Reid
        </footer>
      </div>
    </div>
  );
}
