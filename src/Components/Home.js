import React, { Component } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Navbars from "./navbar";
import Search from "./search";
import MoviesAdded from "./moviesAdded";
import SeriesAdded from "./SeriesAdded";
import Footer from "./footer";


export class Home extends Component {
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <Navbars />
                    <Search />
                    <MoviesAdded />
                    <SeriesAdded />
                    <Footer />
                </header>
            </div>
        );
    }
}

export default Home;
