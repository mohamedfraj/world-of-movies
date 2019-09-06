import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

export class AdminAddMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            titre: '',
            genre: '',
            rating: 1,
            // link: '',
            description: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addNewMovie = () => {
        if (this.state.img === '' || this.state.titre === '' || this.state.genre === '' || this.state.rating === '' || this.state.description === '') {
            return alert('all field must be filled')
        } else {
            axios.post('/add_movie', { ...this.state })
                .then(() => this.props.addMovie({
                    img: this.state.img,
                    titre: this.state.titre,
                    genre: this.state.genre,
                    rating: this.state.rating,
                    // link: this.state.link,
                    description: this.state.description
                })
                )
        }
    }

    render() {
        return (
            <div className='App add-form'>
                <input className="add-inputs" name="img" type="text" onChange={this.handleChange} placeholder='imgURL' ></input>
                <input className="add-inputs" name="titre" type="text" onChange={this.handleChange} placeholder='Titre' ></input>
                <input className="add-inputs" name="genre" type="text" onChange={this.handleChange} placeholder='Genre' ></input>
                <input className="add-inputs" name="rating" type="number" min="1" max="5" onChange={this.handleChange} placeholder='Rating' ></input>
                {/* <input className="add-inputs" name="link" type="text" onChange={this.handleChange} placeholder='LinkOfMovies' ></input> */}
                <textarea className="add-inputs" type="text" rows={6} name="description" onChange={this.handleChange} placeholder='Description' />
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '500px', marginTop: '25px' }}>
                    <Link to='/Admin/PageForMovies'><button type="button" class="btn btn-warning">BACK</button></Link>
                    <Link to={this.state.img === '' || this.state.titre === '' || this.state.genre === '' || this.state.rating === '' || this.state.description === '' ? "/AddMovies" : "/Admin/PageForMovies"}>
                        <button onClick={this.addNewMovie} type="button" style={{ width: 'fit-content', marginLeft: '20px' }} className="btn btn-primary">
                            ADD
                    </button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMovie: newmovie => {
            dispatch({
                type: 'ADD_MOVIE',
                newmovie
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AdminAddMovies);