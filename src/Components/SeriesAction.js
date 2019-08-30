import React, { Component } from 'react';
import {connect} from "react-redux"
import Navbar from "./navbar";
import Search from "./search";

export class SeriesAction extends Component {
       
    render() {
    //     const {Seriestab}=this.props
    //    const newarray= Seriestab.filter((el,i)=>{<
    //        el.genre=='action'
    //    })
        return (
            <div className='App'>
                <Navbar />
                <Search />

            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        Seriestab: state.ReducerSeries
    }
}

export default connect(mapStateToProps)(SeriesAction);
