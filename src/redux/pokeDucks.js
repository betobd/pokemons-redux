import axios from "axios";

//consts

const initialData = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const GET_POKEMONS = "GET_POKEMONS";
const NEXT_POKEMONS = "NEXT_POKEMONS";
const PREVIOUS_POKEMONS = "PREVIOUS_POKEMONS";
const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
//reducers

export default function pokeReducer(state = initialData, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, ...action.payload };
    case NEXT_POKEMONS:
      return { ...state, ...action.payload };
    case PREVIOUS_POKEMONS:
      return { ...state, ...action.payload };
    case GET_POKEMON_DETAIL:
        return { ...state, pokeDetails: action.payload };
    default:
      return state;
  }
}

//actions

export const getPokemonsAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );
    dispatch({
      type: GET_POKEMONS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextPokemonAction = () => async (
  dispatch,
  getState
) => {
  const nextLink = getState().pokemones.next;
  try {
    const res = await axios.get(nextLink);
    dispatch({
      type: NEXT_POKEMONS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const previousPokemonAction = () => async (
  dispatch,
  getState
) => {
  const previousLink = getState().pokemones.previous;
  try {
    const res = await axios.get(previousLink);
    dispatch({
      type: PREVIOUS_POKEMONS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const pokeDetailAction = (url = 'https://pokeapi.co/api/v2/pokemon/1/') => async (dispatch, getState) => {    
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_POKEMON_DETAIL,
      payload: {
        name: res.data.name,
        weight: res.data.weight,
        width: res.data.width,
        height: res.data.height,
        picture: res.data.sprites.front_default,
      },
    });
  } catch (error) {
    console.log(error);
  }
}