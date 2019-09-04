import React, { Component } from 'react';
import { connect } from "react-redux"
import axios from 'axios';
import Navbar from "./navbar";
import MovieCard from "./MovieCard";
import Footer from "./footer";


export class MovieSF extends Component {
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

    componentDidMount(){
        axios.get('/movies')
        .then((res) => this.props.updateTab(res.data))
    }

    render() {
        const { Moviestab } = this.props
        const newarray = Moviestab.filter((el, i) => el.genre === 'Sci-Fi')
        return (
            <div className="App">
                <Navbar />
                <div>
                    <div class="search__container">
                        <p class="search__title">Search, for your favorite series</p>
                        <input onChange={this.search} class="search__input" type="text" placeholder="Search" />
                    </div>
                </div>
                <div className='Actiontitle'>
                    <h3 className='addedtitre'>Action is dun</h3>
                </div>
                <div className='ActionMovies-css'>
                    {newarray.filter(el=>el.titre.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, i) => <MovieCard key={i} info={el} />)}
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        Moviestab: state.ReducerMovies
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateTab: updated => {
            dispatch({
                type: 'UPDATE_MOVIES',
                updated
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieSF);

