import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Admin extends Component {
    render() {
        return (
            <div className="page-home-Admin" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div className="Amin-p-f-Movies">
                    <Link to="/Admin/PageForMovies"><button type="button" class="btn btn-info">Admin Page for Movies</button></Link>
                </div>
                <div className="Amin-p-f-Series">
                    <Link to='/Admin/PageForSeries'><button type="button" class="btn btn-info">Admin Page for Series</button></Link>
                </div>
            </div>
        );
    }
}

export default Admin;
