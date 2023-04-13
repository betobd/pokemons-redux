import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  nextPokemonAction,
  previousPokemonAction,
    pokeDetailAction,
} from "../redux/pokeDucks";
import Details from "./Details";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);
  return (
    <div className="row">
      <div className="col-md-6">
        <div>Pokemons</div>

        <div className="d-flex justify-content-between">
          {pokemons.length === 0 && (
            <button
              onClick={() => dispatch(getPokemonsAction())}
              className="btn btn-dark"
            >
              Get Pokemons
            </button>
          )}

          {next && (
            <button
              onClick={() => dispatch(nextPokemonAction())}
              className="btn btn-dark"
            >
              Next Pokemons
            </button>
          )}

          {previous && (
            <button
              onClick={() => dispatch(previousPokemonAction())}
              className="btn btn-dark"
            >
              Previous Pokemons
            </button>
          )}
        </div>

        <ul className="list-group mt-3">
          {pokemons.map((item) => (
            <li key={item.name} className="list-group-item text-uppercase d-flex justify-content-between">
              {item.name}
              <button
               className="btn btn-dark btn-sm"
               onClick={() => dispatch(pokeDetailAction(item.url))}
               > Details
                </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <h3>Detalles</h3>
        <Details/>
      </div>
    </div>
  );
};

export default Pokemons;
