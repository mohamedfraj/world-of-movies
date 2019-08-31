import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./Home";
import SeriesAction from "./SeriesAction";
import MoviesAction from "./MoviesAction";
import Admin from "./Admin";
import AdminPageformovies from "./AdminPageformovies";
import AdminPageforSeries from "./AdminPageForSeries";
import AdminAddMovies from "./AdminAddMovies";
import AdminAddSeries from "./AdminAddSeries";

export class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/SeriesAction' component={SeriesAction}></Route>
                <Route exact path='/MoviesAction' component={MoviesAction}></Route>
                <Route exact path='/Admin' component={Admin}></Route>
                <Route exact path='/Admin/PageForMovies' component={AdminPageformovies}></Route>
                <Route exact path='/Admin/PageForSeries' component={AdminPageforSeries}></Route>
                <Route exact path='/AddMovies' component={AdminAddMovies}></Route>
                <Route exact path='/AddSeries' component={AdminAddSeries}></Route>
            </div>
        );
    }
}

export default Routes;


