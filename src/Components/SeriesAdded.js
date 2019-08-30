import React, { Component } from 'react';
import { connect } from "react-redux";
// import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import MovieCard from './MovieCard'


export class SeriesAdded extends Component {
    render() {
        const { Seriestab } = this.props
        return (
            <div className='seriesAdded-container'>
                <h3 className='addedtitre'>SeriesAdded:</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    {/* <div class="owl-carousel owl-theme"> */}
                        {Seriestab.map((el, i) => <MovieCard key={i} info={el} />)}
                    {/* </div> */}
                </div>
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
