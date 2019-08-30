import React, { Component } from 'react';
import { connect } from "react-redux";
import MovieCard from './MovieCard';
import Carousel from 'react-multi-carousel';


export class SeriesAdded extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 7,
                slidesToSlide: 3,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1050 },
                items: 5,
                slidesToSlide: 2
            },
            tablet: {
                breakpoint: { max: 1050, min: 910 },
                items: 3,
                slidesToSlide: 1
            },
            medium: {
                breakpoint: { max: 910, min: 630 },
                items: 2,
                slidesToSlide: 1
            },
            mobile: {
                breakpoint: { max: 630, min: 0 },
                items: 1,
                slidesToSlide: 1
            },
        };
        const { Seriestab } = this.props
        return (
            <div className='seriesAdded-container'>
                <div className='mediaquery'>
                    <h3 className='addedtitre'>Recent Series:</h3>
                </div>
                <Carousel responsive={responsive}>
                    {Seriestab.map((el, i) => <MovieCard key={i} info={el} />)}
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Seriestab: state.ReducerSeries
    }
}

export default connect(mapStateToProps)(SeriesAdded);
