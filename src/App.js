// import logo from "./logo.svg";
import "./App.css";
import Pokedex from "./Pokedex";

function App() {
  return (
    <div className="App-container">
      <Pokedex
        Pokedex_width="99%"
        Pokedex_height="fit-content"
        Pokedex_backgroundColor="rgb(240, 240, 240)"
      />
    </div>
  );
}

export default App;
