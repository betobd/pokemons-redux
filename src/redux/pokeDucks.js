import axios from "axios";

//consts

const initialData = {
  array: [],
  offset: 0,
};

const GET_POKEMONS = "GET_POKEMONS";
const NEXT_POKEMONS = "NEXT_POKEMONS";
//reducers

export default function pokeReducer(state = initialData, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, array: action.payload };
    case NEXT_POKEMONS:
        return { ...state, array: action.payload, offset: state.offset + 20 };
    default:
      return state;
  }
}

//actions

export const getPokemonsAction = () => async (dispatch, getState) => {
  const offset = getState().pokemones.offset;
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    dispatch({
      type: GET_POKEMONS,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextPokemonAction = (nextItemsNumber) => async (dispatch, getState) => {
    const offset = getState().pokemones.offset + parseInt(nextItemsNumber);
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${nextItemsNumber}`
    );
    dispatch({
        type: NEXT_POKEMONS,
        payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
