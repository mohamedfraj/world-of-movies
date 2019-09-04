import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));


export class AdminPageforSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    search = e => {
        this.setState({
            keyword: e.target.value
        })
    }

    componentDidMount=()=> {
        axios.get('/series')
            .then((res) => this.props.updatet(res.data))
    }
            

    render() {
        const { seriesTab } = this.props
        return (

            <div style={{ paddingTop: "50px" }}>
                <div style={{ display: "flex", paddingBottom: '10px', justifyContent: "center" }}>
                    <div style={{ paddingRight: '20px', }}>
                        <Link to='/AddSeries'>
                            <button type="button" class="btn btn-primary" style={{ borderRadius: "5px", border: "none", fontSize: "18px", padding: "10px" }}>
                                Add Serie
                            </button>
                        </Link>
                    </div>
                    {/* BECH YETNA7A */}
                    <div style={{ paddingRight: '20px', }}>
                        <Link to='/'><button type="button" class="btn btn-primary" style={{ borderRadius: "5px", border: "none", fontSize: "18px", padding: "10px" }}>Home Page</button></Link>
                    </div>
                    <input onChange={this.search} type="search" placeholder="Search..." />
                </div>
                <div>
                    <Paper className={useStyles.root}>
                        <Table className={useStyles.table}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Titre</StyledTableCell>
                                    <StyledTableCell align="center">Genre</StyledTableCell>
                                    <StyledTableCell align="right">Rating</StyledTableCell>
                                    <StyledTableCell align="left">Image URL</StyledTableCell>
                                    <StyledTableCell align="left">Link</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {seriesTab.filter(el => el.titre.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((row, i) => (
                                    <StyledTableRow key={i} component={Link} to={`/EditSeries/${row._id}`}>
                                        <StyledTableCell component="th" scope="row">{row.titre}</StyledTableCell>
                                        <StyledTableCell align="center">{row.genre}</StyledTableCell>
                                        <StyledTableCell align="center">{row.rating}</StyledTableCell>
                                        <StyledTableCell align="left">{row.img.slice(0, 50)}</StyledTableCell>
                                        <StyledTableCell align="left">{row.link.slice(0, 50)}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <Link to='/Admin'><button type="button" class="btn btn-dark">BACK</button></Link>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        seriesTab: state.ReducerSeries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatet: updated => {
            dispatch({
                type: 'UPDATE_SERIES',
                updated
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminPageforSeries);