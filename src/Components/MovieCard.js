import React, { Component } from 'react';

export class MovieCard extends Component {
    render() {
        return (
            <div style={{border: 'none'}} class="card">
                <div class="poster"><img src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/11/Avengers_Infinity_war_poster.jpeg/revision/latest/scale-to-width-down/324?cb=20180316141550" /></div>
                <div class="details">
                    <h5 style={{color: 'white'}}><a href="https://www.imdb.com/title/tt4154756/">Avengers: Infinity War (2018)</a></h5>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>

                    <div class="tags">
                        <span class="fantasy">Fantasy</span>
                        <span class="scifi">Sci Fi</span>
                    </div>

                    <div class="info">
                        <p>Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
