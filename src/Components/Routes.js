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
import AdminEditMovies from "./AdminEditMovies";
import AdminEditSeries from "./AdminEditSeries";
import MovieSF from "./MovieSF";
import SerieSF from "./SerieSF";
import InfoForMovie from "./InfoForMovie";
import InfoForSerie from "./InfoForSerie";
import aboutUs from "./aboutUs"

export class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/SeriesAction' component={SeriesAction}></Route>
                <Route exact path='/MoviesAction' component={MoviesAction}></Route>
                <Route exact path='/MovieSF' component={MovieSF}></Route>
                <Route exact path='/SerieSF' component={SerieSF}></Route>
                <Route exact path='/Admin' component={Admin}></Route>
                <Route exact path='/Admin/PageForMovies' component={AdminPageformovies}></Route>
                <Route exact path='/Admin/PageForSeries' component={AdminPageforSeries}></Route>
                <Route exact path='/AddMovies' component={AdminAddMovies}></Route>
                <Route exact path='/AddSeries' component={AdminAddSeries}></Route>
                <Route exact path='/EditMovies/:id' render={(props) => <AdminEditMovies movieID={props.match.params.id} />}></Route>
                <Route exact path='/EditSeries/:id' render={(props) => <AdminEditSeries serieID={props.match.params.id} />}></Route>
                <Route exact path='/InfoForMovie/:id' render={(props) => <InfoForMovie movieID={props.match.params.id} />}></Route>
                <Route exact path='/InfoForSerie/:id' render={(props) => <InfoForSerie serieID={props.match.params.id} />}></Route>
                <Route exact path='/aboutUs' component={aboutUs}></Route>
            </div>
        );
    }
}

export default Routes;


