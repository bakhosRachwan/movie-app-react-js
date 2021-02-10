import React from "react";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  // const name = props.original_title.replace(/\s+/g, "-");
  return (
    <div className="cardgrid">
      <div id="imagecard">
        <img
          src={`https://image.tmdb.org/t/p/w200` + props.poster_path}
          alt={props.title}
        />
      </div>
      <Link
        // to={`/movie/${props.movieId}/${name}/`}
        to={`/movie/${props.movieId}`}
        style={{ textDecoration: "none" }}
      >
        <div className="cardtitle">{props.original_title}</div>
      </Link>
    </div>
  );
};

export default MovieItem;
