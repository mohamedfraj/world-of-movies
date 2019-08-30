import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export class MovieCard extends Component {
    render() {
        const { key, info } = this.props
        return (
            <div class="item">
                <div key={key} style={{ border: 'none' }} className="card">
                    <div class="poster"><img alt="qsdsq" src={info.img} /></div>
                    <div class="details">
                        <h5 style={{ color: 'white' }}><a style={{ textDecoration: 'none' }} href={info.link}>{info.titre}</a></h5>
                        <div class="rating">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={info.rating}
                            />
                        </div>

                        <div class="tags">
                            <span class="fantasy">{info.genre}</span>
                        </div>

                        <div class="info">
                            <p>{info.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
