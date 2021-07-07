import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Axios from 'axios';

function App() {
  const [state, setState] = useState([]);

  const getPokemon = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
    .then(res => {
      setState(res.data.results);
    })
  }
  return (
    <div className="w-25 mx-auto">
      <button type="submit" onClick={getPokemon}>Gotta catch em all, gotta catch em all!</button>
      {state.map((pokemon, i) => {
        return <ul><li key={i}>{pokemon.name}</li></ul>
      })}
    </div>
  );
}

export default App;