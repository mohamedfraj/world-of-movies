import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from "./MovieCard";
import Carousel from 'react-multi-carousel';

export class MoviesAdded extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    search = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
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
        const { moviesTab } = this.props
        return (
            <div>
                <div className='mediaquery'>
                    <h3 className='addedtitre'>Recent Movies:</h3>
                </div>
                <Carousel responsive={responsive}>
                    {moviesTab.filter(el=>el.titre.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, i) => <MovieCard key={i} info={el} />)}
                </Carousel>
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