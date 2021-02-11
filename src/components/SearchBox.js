import React, { useState, useRef, useContext } from "react";
import { Form, Button, FormControl, Spinner } from "react-bootstrap";
import { StateContext } from "../State";

const TMDB_BASE_URL = `https://api.themoviedb.org/3`;

const constructUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}&include_adult=true`;
};

const SpinnerComp = () => {
  return (
    <Spinner animation="border" role="status" variant="light">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

const SearchBox = (props) => {
  const [state, dispatch] = useContext(StateContext);
  const inputValue = useRef();

  const handleMovies = (movies) => {
    fetch(constructUrl("search/movie", movies))
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_Movies", payload: data.results }));
  };

  const [value, setValue] = useState("");
  const spinnerFunc = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMovies(inputValue.current.value);
    setValue("");
    inputValue.current.value = "";
  };

  return (
    <div className="search">
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          type="text"
          ref={inputValue}
          placeholder="Search"
          onChange={spinnerFunc}
          required
          className="mr-3"
          id="input"
        />
        {value && <SpinnerComp />}

        <Button type="submit" id="searchButton">
          SEARCH
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;

