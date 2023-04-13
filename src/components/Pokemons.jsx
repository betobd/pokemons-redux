import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsAction, nextPokemonAction } from "../redux/pokeDucks";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemones.array);
  console.log(pokemons);
  return (
    <>
      <div>Pokemons</div>
      <button onClick={() => dispatch(getPokemonsAction())}>        
        Get Pokemons
      </button>

      <button onClick={() => dispatch(nextPokemonAction(20))}> Next Pokemons</button>
      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Pokemons;
