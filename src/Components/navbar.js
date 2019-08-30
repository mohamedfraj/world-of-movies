import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";


export class Navbars extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <img className="logo-worldmovies" alt="" src="https://i.mjh.nz/au/images/tv.320203000307.png"></img>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav className='navmenu'>
                            <Link to='/'><Nav.Link style={{ color: 'white' }} href="#deets">Home</Nav.Link></Link>
                            <NavDropdown style={{ color: 'white' }} title="Series" id="collasible-nav-dropdown">
                                <Link to='/SeriesAction'><NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item></Link>
                                <NavDropdown.Item href="#action/3.2">comedy</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">romantic</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Home</NavDropdown.Item> */}
                            </NavDropdown>
                            <NavDropdown style={{ color: 'white' }} title="Movies" id="collasible-nav-dropdown">
                                <Link to='/MoviesAction'><NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item></Link>
                                <NavDropdown.Item href="#action/3.2">comedy</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">romantic</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Home</NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link style={{ color: 'white' }} eventKey={2} href="#memes">About Us
                           </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navbars;
