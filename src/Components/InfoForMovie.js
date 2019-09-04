import React, { Component } from 'react';
import { connect } from 'react-redux';

export class InfoForMovie extends Component {
    state = { }
    componentDidMount() {
        this.setState({
            ...this.props.movies.filter(el => el._id === this.props.movieID)[0]
        })
    }
    
    render() {
        return (
            <div className='container-info'>
                <img className="imgInfo" alt='' src={this.state.img} />
                <div className="block-info">
                    <h3 style={{ color: "#00e600" }}>Title :  {this.state.titre}</h3>
                    <h2 style={{ color: "#00e600" }}>genre : {this.state.genre}</h2>
                    <h2 style={{ color: "#00e600" }}>rating : {this.state.rating}</h2>
                    <h2 style={{ color: "#00e600" }}>description : {this.state.description}</h2>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        movies: state.ReducerMovies
    }
}
export default connect(mapStateToProps)(InfoForMovie);
