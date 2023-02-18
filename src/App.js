import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <img
        src="./images/dictionaryLogo.png"
        alt="logo"
        className="dictionaryLogo"
      />
      <div className="container">
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
