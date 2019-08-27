import React, { Component } from 'react';
import MovieCard from "./MovieCard";


export class MoviesAdded extends Component {
    constructor(props){
        super(props)
        this.state={
        
        }
    }
    render() {
        return (
            <div>
                {/* {tab.map((el,i) => )} */}
                <MovieCard />
            </div>
        );
    }
}
export default MoviesAdded;
