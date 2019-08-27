import React from 'react';
import './App.css';
import Navbars from "./navbar";
import Search from "./search";
import MoviesAdded from "./moviesAdded";


function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <Navbars />
        <Search />
        <MoviesAdded />
      </header>
    </div>
  );
}

export default App;
