import "./App.css";
import Dictionary from "./Dictionary";
import "./images/dictionaryLogo.png";

function App() {
  return (
    <div className="App">
      <img src="./images/dictionaryLogo.png" alt="logo" />
      <div className="container">
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
