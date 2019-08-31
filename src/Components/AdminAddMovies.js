import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class AdminAddMovies extends Component {
    render() {
        return (
            <div className='App'>
                <div>
                    <input type="text" placeholder='imgURL' ></input>
                </div>
                <div>
                    <input type="text" placeholder='Titre' ></input>
                </div>
                <div>
                    <input type="text" placeholder='Genre' ></input>
                </div>
                <div>
                    <input type="text" placeholder='Rating' ></input>
                </div>
                <div>
                    <input type="text" placeholder='LinkOfMovies' ></input>
                </div>
                <Link to='/Admin/PageForMovies'><button type="button">Back</button></Link>
            </div>
        );
    }
}


export default AdminAddMovies;
