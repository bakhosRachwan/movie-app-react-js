import React, { useState, useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { StateContext } from "../State";
import logo from "./Logo2.png";

const Header = () => {
  const [currentGenre, setCurrentGenre] = useState("");

  const [state, dispatch] = useContext(StateContext);

  const genresList = [
    { id: 0, name: "All Genres" },
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" }
  ];
  const handleGenre = (item) => {
    dispatch({ type: "SET_Genre", payload: item.id });
    setCurrentGenre(item.name);
  };
  const Render = () => {
    return genresList.map((item) => {
      return (
        <NavDropdown.Item onClick={() => handleGenre(item)} key={item.id}>
          {item.name}
        </NavDropdown.Item>
      );
    });
  };

  return (
    <Navbar className="Navbar">
      <Link to="/">
        <Navbar.Brand>
          <img alt="" src={logo} width="250" height="90" className="image" />{" "}
        </Navbar.Brand>
      </Link>
      <Nav id="drop2">
        <NavDropdown
          id="drop"
          title={currentGenre ? currentGenre : "ALL GENRES"}
        >
          <Render />
        </NavDropdown>
      </Nav>
      <SearchBox />
    </Navbar>
  );
};

export default Header;
