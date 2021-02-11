import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import { StateContext } from "../State";

const MoviesGrid = () => {
  const [state] = useContext(StateContext);
  const SingleMovie = ({ item }) => {
    return (
      <MovieItem
        key={item.id}
        movieId={item.id}
        original_title={item.original_title}
        release_date={item.release_date}
        poster_path={item.poster_path}
      />
    )
  }
  if (state.genre) {
    return state.movies
      .filter((m) => m.genre_ids.includes(state.genre))
      .map((items) => <SingleMovie item={items} />);
  }
  return state.movies.map((items) => {
    return (
      <SingleMovie item={items} />
    );
  });
};

export default MoviesGrid;
