import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class AdminPageforSeries extends Component {
    render() {
        const { seriesTab } = this.props
        return (

            <div style={{ paddingTop: "50px" }}>
                <div style={{ display: "flex", paddingBottom: '10px', justifyContent: "center" }}>
                    <div style={{ paddingRight: '20px', }}>
                        <Link to='/AddSeries'><button style={{ borderRadius: "5px", border: "none", fontSize: "18px", padding: "10px" }}>AddSeries</button></Link>
                    </div>
                    <input type="search" placeholder="Search..." />
                </div>
                <div>
                    <table style={{ width: "100%", color: "white" }}>
                        <tr style={{ textAlign: 'center' }}>
                            <th>imgURL</th>
                            <th>Titre</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th>LinkOfSeries</th>
                        </tr>
                        {seriesTab.map((Info, i) =>
                            <tr key={i}>
                                <td>{Info.img}</td>
                                <td>{Info.titre}</td>
                                <td>{Info.genre}</td>
                                <td style={{ textAlign: "center" }}>{Info.rating}</td>
                                <td>{Info.link}</td>
                            </tr>)}
                    </table>
                </div>
                <Link to='/Admin'><button type="button">Back</button></Link>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        seriesTab: state.ReducerSeries
    }
}

export default connect(mapStateToProps)(AdminPageforSeries);