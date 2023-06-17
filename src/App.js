import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/alenac27/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Coded
          </a>{" "}
          by Alena Causov
        </footer>
      </div>
    </div>
  );
}

export default App;
