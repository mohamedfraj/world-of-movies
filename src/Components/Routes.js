import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./Home";
import SeriesAction from "./SeriesAction"

export class Routes extends Component {
    render() {
        return (
                <div>
                   <Route exact path='/' component={Home}></Route>
                   <Route exact path='/SeriesAction' component={SeriesAction}></Route>
                </div>
        );
    }
}

export default Routes;


