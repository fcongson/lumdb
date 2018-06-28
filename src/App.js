import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: "The Force Awakens"
  },
  {
    id: 2,
    title: "The Last Jedi"
  },
  {
    id: 3,
    title: "Rogue One",
    desc: "A Star Wars Story"
  },
  {
    id: 4,
    title: "Solo",
    desc: "A Star Wars Story"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} desc={movie.desc} />
        ))}
      </div>
    );
  }
}

export default App;
