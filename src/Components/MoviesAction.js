import React, { Component } from 'react';
import { connect } from "react-redux"
import Navbar from "./navbar";
import Search from "./search";
import MovieCard from "./MovieCard";
import Footer from "./footer";


export class MoviesAction extends Component {
    render() {
        const { Moviestab } = this.props
        const newarray = Moviestab.filter((el, i) => el.genre === 'Sci-Fi')
        return (
            <div className="App">
                <Navbar />
                <Search />
                <div className='Actiontitle'>
                    <h3 className='addedtitre'>Action is dun</h3>
                </div>
                <div className='ActionMovies-css'>
                    {newarray.map((el, i) => <MovieCard key={i} info={el} />)}
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        Moviestab: state.ReducerMovies
    }
}

export default connect(mapStateToProps)(MoviesAction);
