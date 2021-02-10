import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import { StateContext } from "../State";

const MoviesGrid = () => {
  // check if genre = 0 then show all movies

  // console.log(movies.filter((m) => m.genre_ids.indexOf(genre) !== -1));
  const [state] = useContext(StateContext);

  if (state.genre) {
    return state.movies
      .filter((m) => m.genre_ids.includes(state.genre))
      .map((item) => (
        <MovieItem
          key={item.id}
          movieId={item.id}
          original_title={item.original_title}
          release_date={item.release_date}
          poster_path={item.poster_path}
        />
      ));
  }
  // otherwise, filter according to genre then map
  return state.movies.map((item) => {
    return (
      <MovieItem
        key={item.id}
        movieId={item.id}
        original_title={item.original_title}
        release_date={item.release_date}
        poster_path={item.poster_path}
      />
    );
  });
};

export default MoviesGrid;
