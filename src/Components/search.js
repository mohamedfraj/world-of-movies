import React, { Component } from 'react';

export class search extends Component {
    
    render() {  
        return (
            <div>
                <div class="search__container">
                    <p class="search__title">Search, for your favorite movies</p>
                    <input onChange={this.search} class="search__input" type="text" placeholder="Search" />
                </div>
            </div>
        );
    }
}

export default search;



