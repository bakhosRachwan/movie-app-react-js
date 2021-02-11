import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
const constructUrlG = (path) => {
  return `${TMDB_BASE_URL}/movie/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}`;
};
const constructUrlT = (path, query) => {
  return `${TMDB_BASE_URL}/movie/${path}/${query}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}`;
};

const MoviePage = (props) => {
  const [movieData, setMovieData] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [movieCast, setMovieCast] = useState(null);

  const { id: idx } = useParams();
  console.log(idx);
  useEffect(() => {
    fetch(constructUrlG(idx))
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, [idx]);

  useEffect(() => {
    const query = "videos";
    fetch(constructUrlT(idx, query))
      .then((response) => response.json())
      .then((data) => setMovieTrailer(data.results));
  }, [idx]);
  useEffect(() => {
    const query = "credits";
    fetch(constructUrlT(idx, query))
      .then((response) => response.json())
      .then((data) => setMovieCast(data.cast));
  }, [idx]);

  return (
    <div>
      {movieData && movieTrailer && movieCast && (
        <div>
          <div id="moviepagecont">
            <div id="postercont">
              <img
                src={
                  `https://image.tmdb.org/t/p/w500` + movieData.backdrop_path
                }
                alt={movieData.title}
                className="image2"
              />
              <h1 id="title">{movieData.original_title}</h1>
              <h4 id="reldate">Release Date: {movieData.release_date}</h4>
              <h4 id="rate">Rating: {movieData.vote_average}/10</h4>
              <div className="back">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="back">
                    <MdArrowBack size="2em" /> Back{" "}
                  </div>
                </Link>
              </div>
            </div>
            <div id="infocont">
              <h5 id="info">
                {" "}
                <u>Overview:</u>{" "}
              </h5>
              <p> {movieData.overview} </p>

              <h5 id="info">
                {" "}
                <u>Cast:</u>
              </h5>
              <p>
                {" "}
                {movieCast.map((actor) =>
                  actor.cast_id <= 15 ? (
                    <Link to={`/actor/${actor.id}`}> {actor.name} ; </Link>
                  ) : null
                )}{" "}
              </p>

              <h5 id="info">
                {" "}
                <u>Genres:</u>{" "}
              </h5>
              <div>
                {" "}
                {movieData.genres.map((val) => (
                  <span key={val.id}>{val.name} /</span>
                ))}
              </div>
            </div>
          </div>
          {movieTrailer[0] !== undefined ? (
            <div id="youtubetut">
              <h1 id="tutitle"> GO AHEAD! WATCH THE TRAILER BELLOW </h1>
              <iframe
                src={`https://www.youtube.com/embed/` + movieTrailer[0].key}
                height="500"
                width="100%"
                title="Movie Tutorial"
                id="tutorial"
              ></iframe>
            </div>
          ) : (
              "UNFORTUNATELY NO TRAILER AVAILABLE!!"
            )}
        </div>
      )}
    </div>
  );
};

export default MoviePage;
