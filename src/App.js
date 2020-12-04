// import logo from "./logo.svg";
import "./App.css";
import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";

function rand_select_half(pokes, pokes_per_column = 4) {
  var arr_size = pokes.length;
  var pokes_per_row = Math.floor(arr_size / pokes_per_column);

  var divide_pokes = [];
  var poke = [];
  var poke_count = 0;
  var rand_select;

  while (pokes_per_row > 0) {
    rand_select = Math.floor(Math.random() * (arr_size - 1));
    poke_count += 1;
    poke.push(pokes[rand_select]);

    if (poke_count === pokes_per_column) {
      poke_count = 0;
      divide_pokes.push(poke);
      poke = [];
      pokes_per_row -= 1;
    }
  }
  return divide_pokes;
}

function App() {
  const pokes = [
    { pokeId: "004", name: "Charmander", type: "fire", base_experience: 62 },
    { pokeId: "007", name: "Squirtle", type: "water", base_experience: 63 },
    { pokeId: "011", name: "Metapod", type: "bug", base_experience: 72 },
    {
      pokeId: "012",
      name: "Butterfree",
      type: "flying",
      base_experience: 178,
    },
    {
      pokeId: "025",
      name: "Pikachu",
      type: "electric",
      base_experience: 112,
    },
    {
      pokeId: "039",
      name: "Jigglypuff",
      type: "normal",
      base_experience: 95,
    },
    { pokeId: "094", name: "Gengar", type: "poison", base_experience: 225 },
    { pokeId: "133", name: "Eevee", type: "normal", base_experience: 65 },
  ];

  var pokes1, pokes2;
  [pokes1, pokes2] = rand_select_half(pokes, 4);
  return (
    <div className="App-container">
      <Pokedex
        Pokedex_width="99%"
        Pokedex_height="fit-content"
        Pokedex_backgroundColor="rgb(240, 240, 240)"
        pokecards={pokes1.map((pokeinfo) => (
          <Pokecard
            Pokecard_width="200px"
            Pokecard_height="220px"
            Pokecard_backgroundColor="white"
            pokeName={pokeinfo.name}
            pokeImageId={pokeinfo.pokeId}
            pokeType={pokeinfo.type}
            pokeExperience={pokeinfo.base_experience}
          />
        ))}
      />

      <Pokedex
        Pokedex_width="99%"
        Pokedex_height="fit-content"
        Pokedex_backgroundColor="rgb(240, 240, 240)"
        pokecards={pokes2.map((pokeinfo) => (
          <Pokecard
            Pokecard_width="200px"
            Pokecard_height="220px"
            Pokecard_backgroundColor="white"
            pokeName={pokeinfo.name}
            pokeImageId={pokeinfo.pokeId}
            pokeType={pokeinfo.type}
            pokeExperience={pokeinfo.base_experience}
          />
        ))}
      />
    </div>
  );
}

export default App;
