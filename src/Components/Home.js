import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'react-multi-carousel/lib/styles.css';
import Navbars from "./navbar";
import MoviesAdded from "./moviesAdded";
import SeriesAdded from "./SeriesAdded";
import Footer from "./footer";



export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <Navbars />
                    <MoviesAdded />
                    <SeriesAdded />
                    <Footer />
                </header>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        moviesReducer: state.ReducerMovies
    }
}

export default connect(mapStateToProps)(Home);
