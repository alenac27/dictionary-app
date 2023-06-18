import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Yoga" />
        </main>
        <footer>
          <a
            href="https://github.com/alenac27/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Alena Causov hosted on{" "}
          <a
            href="https://peppy-pothos-b40eb0.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
