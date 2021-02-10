import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = { movies: [], genre: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_Movies":
      return { ...state, movies: action.payload };
    case "SET_Genre":
      return { ...state, genre: action.payload };
    default:
      return state;
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(dispatch);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
