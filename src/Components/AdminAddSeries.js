import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

export class AdminAddSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            titre: '',
            genre: '',
            rating: 1,
            link: '',
            description: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    addnewserie = () => {
        axios.post('/add_serie', {...this.state})
            .then(() => this.props.addserie({
                img: this.state.img,
                titre: this.state.titre,
                genre: this.state.genre,
                rating: this.state.rating,
                link: this.state.link,
                description: this.state.description
            })
            )
    }

    render() {

        return (
            <form className='App add-form'>
                <input className="add-inputs" type="text" onChange={this.handleChange} name="img" placeholder='imgURL' ></input>
                <input className="add-inputs" type="text" onChange={this.handleChange} name="titre" placeholder='Titre' ></input>
                <input className="add-inputs" type="text" onChange={this.handleChange} name="genre" placeholder='Genre' ></input>
                <input className="add-inputs" type="number" min="1" max="5" onChange={this.handleChange} name="rating" placeholder='Rating' ></input>
                <input className="add-inputs" type="text" onChange={this.handleChange} name="link" placeholder='LinkOfSeries' ></input>
                <textarea className="add-inputs" type="text" rows={6} name="description" onChange={this.handleChange} placeholder='Description' />
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '500px', marginTop: '25px' }}>
                    <Link to='/Admin/PageForSeries'><button type="button" class="btn btn-warning">BACK</button></Link>
                    <Link to="/Admin/PageForSeries" type="button" onClick={this.addnewserie} style={{ width: 'fit-content', marginLeft: '20px' }} className="btn btn-primary">ADD</Link>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addserie: newseries => {
            dispatch({
                type: "ADD_SERIE",
                newseries
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AdminAddSeries);
