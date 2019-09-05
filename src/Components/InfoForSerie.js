import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import heart from '../heart.svg';
import heart2 from '../heart2.svg';

export class InfoForSerie extends Component {
    state = { liked: false }
    componentDidMount() {
        this.setState({
            ...this.props.series.filter(el => el._id === this.props.serieID)[0]
        })
    }

    likeIt = () => {
        this.setState({ liked: !this.state.liked })

        if (this.state.liked === false) {
            this.props.likeMovie(this.state)
        } else {
            this.props.disLikeMovie(this.state)
        }
    }

    render() {
        return (
            <div className="informations1">
                <div className="blog-card">
                    <div className="meta">
                        <img className="photo" alt='' src={this.state.img}></img>
                    </div>
                    <div class="description">
                        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                            <h1>Titre :{this.state.titre}</h1>
                            <div className="informations">
                                <button onClick={this.likeIt} style={{ background: '#ddd', border: 'none',borderRadius:"8px" }}><img src={this.state.liked ? heart : heart2} width='25px' alt='heart' /></button>
                                <h5 className="details-infos-movie" style={{ marginLeft: '8px' }}><span>{this.props.likes}</span>Likes</h5>
                            </div>
                        </div>
                        <h2>genre : {this.state.genre}</h2>
                        <div class="rating">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={this.state.rating}
                            />
                        </div>
                        <p>description : {this.state.description}</p>


                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        series: state.ReducerSeries,
        likes: state.LikesReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        likeMovie: () => {
            dispatch({
                type: 'LIKE_IT'
            })
        },
        disLikeMovie: () => {
            dispatch({
                type: 'DISLIKE_IT'
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoForSerie);