import React, { Component } from 'react';
import { connect } from "react-redux"
import Navbar from "./navbar";
import MovieCard from "./MovieCard";
import Footer from "./footer";
import Search from './search';

export class SeriesAction extends Component {

    render() {
        const { Seriestab } = this.props
        const newarray = Seriestab.filter((el, i) => el.genre === 'action')
        console.log(newarray)
        return (
            <div className='App'>
                <Navbar />
                <Search />
                {newarray.map((el, i) => <MovieCard key={i} info={el} />)}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Seriestab: state.ReducerSeries
    }
}

export default connect(mapStateToProps)(SeriesAction);
