import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

export class AdminEditSeries extends Component {
    state = {}
    componentDidMount() {
        this.setState({
            ...this.props.series.filter(el => String(el.id) === this.props.serieID)[0]
        })
    }
   handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }
    render() {
        return (
            <div className='App add-form'>
                <input className="add-inputs" name='titre' value={this.state.titre} type="text" onChange={this.handleChange} placeholder='Titre' ></input>
                <input className="add-inputs" name='genre' value={this.state.genre} type="text" onChange={this.handleChange} placeholder='Genre' ></input>
                <input className="add-inputs" name='rating' value={this.state.rating} type="number" min="1" max="5" onChange={this.handleChange} placeholder='Rating' ></input>
                <input className="add-inputs" name='img' value={this.state.img} type="text" onChange={this.handleChange} placeholder='imgURL' ></input>
                <input className="add-inputs" name='link' value={this.state.link} type="text" onChange={this.handleChange} placeholder='LinkOfMovies' ></input>
                <textarea className="add-inputs" type="text" name='description' rows={6} value={this.state.description} onChange={this.handleChange} placeholder='Description' />
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '500px', marginTop: '25px' }}>
                    <Link to='/Admin/PageForSeries'><button type="button" class="btn btn-warning">BACK</button></Link>
                    <Link to='/Admin/PageForSeries'><button onClick={() => this.props.editSerie(this.state)} type="button" style={{ width: 'fit-content', marginLeft: '20px' }} className="btn btn-primary">EDIT</button></Link>
                    <Link to='/Admin/PageForSeries'><button onClick={() => this.props.deleteSerie(this.state.id)} type="button" style={{ width: 'fit-content', marginLeft: '20px' }} className="btn btn-danger">REMOVE</button></Link>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        series: state.ReducerSeries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteSerie: _id => {
            dispatch({
                type: "REMOVE_SERIE",
                _id
            })
        },
        editSerie: serieToEdit => {
            dispatch({
                type: "EDIT_SERIE",
                serieToEdit
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditSeries);
