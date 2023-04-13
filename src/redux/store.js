import { combineReducers, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


import pokesReducer from "./pokeDucks";

const rootReducer = combineReducers({
  pokemones: pokesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
  return store;
}
