import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import Navbar from "./navbar";
import MovieCard from "./MovieCard";
import Footer from "./footer";


export class SerieSF extends Component {
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

    componentDidMount() {
        axios.get('/series')
            .then((res) => this.props.updateTab(res.data))
    }

    render() {
        const { Seriestab } = this.props
        const newarray = Seriestab.filter((el, i) => el.genre === 'Sci-Fi')
        console.log(newarray)
        return (
            <div className='App'>
                <Navbar />
                <div>
                    <div class="search__container">
                        <p class="search__title">Search, for your favorite series</p>
                        <input onChange={this.search} class="search__input" type="text" placeholder="Search" />
                    </div>
                </div>
                <div className='Actiontitle'>
                    <h3 className='addedtitre'>Series: SF</h3>
                </div>
                <div className='ActionMovies-css'>
                    {newarray.filter(el => el.titre.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, i) => <MovieCard key={i} info={el} />)}
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Seriestab: state.ReducerSeries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTab: updated => {
            dispatch({
                type: 'UPDATE_SERIES',
                updated
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieSF);
