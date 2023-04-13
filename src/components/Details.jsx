import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokeDetailAction } from "../redux/pokeDucks";

const Details = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = () => {
      dispatch(pokeDetailAction());
    };
    fetchData();
  }, [dispatch]);

  const pokemon = useSelector((store) => store.pokemones.pokeDetails);

  return pokemon ?  (
    <div className="card text-center">
      <div className="card-body">
        <img src={pokemon.picture} className="img-fluid"></img>
        <div className="card-title"> {pokemon.name}</div>
        <p className="card-text">width: {pokemon.width} | height: {pokemon.height} </p>
      </div>
    </div>
  ) : null;
};

export default Details;
