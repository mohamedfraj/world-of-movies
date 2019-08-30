import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from "./MovieCard";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export class MoviesAdded extends Component {
   
    render() {
        const { moviesTab } = this.props
        return (
            <div>
                <h3 className='addedtitre'>MoviesAdded:</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    {/* <div class="owl-carousel owl-theme"> */}
                        {moviesTab.map((el, i) => <MovieCard key={i} info={el} />)}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        moviesTab: state.ReducerMovies
    }
}
export default connect(mapStateToProps)(MoviesAdded);