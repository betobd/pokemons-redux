import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  nextPokemonAction,
  previousPokemonAction,
} from "../redux/pokeDucks";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);
  return (
    <>
      <div>Pokemons</div>

      {pokemons.length === 0 && (
        <button onClick={() => dispatch(getPokemonsAction())}>
          Get Pokemons
        </button>
      )}

      {next && (
        <button onClick={() => dispatch(nextPokemonAction())}>
          Next Pokemons
        </button>
      )}

      {previous && (
        <button onClick={() => dispatch(previousPokemonAction())}>         
          Previous Pokemons
        </button>
      )}

      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Pokemons;
