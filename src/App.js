import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Dictionary App</header>
        <DictionarySearch />
        <footer className="App-footer">
          <a href="/">Open source code</a> by Tessa Bailey-Reid
        </footer>
      </div>
    </div>
  );
}
