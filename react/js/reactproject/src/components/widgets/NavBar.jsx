import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {IMAGES} from "../../code/constants";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant={"dark"} expand="lg" sticky={"top"}>
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={IMAGES.logo} alt="" className={"logo"}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <div className={"w-100 d-flex justify-content-center"}>
                                <Form className={"w-75"}>
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Search..."
                                            aria-label="Search..."
                                            aria-describedby="search-btn"
                                        />
                                        <Button id="search-btn" className={"search-btn"}>
                                            Button
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </div>

                            <Nav className={"ms-auto"}>
                                <NavDropdown title={"Account"} id={"nav-dropdown"}>
                                    <NavDropdown.Item href="/">Sign In</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Sign Up</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/">
                                        Sign Out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Link to={"/"} className={"btn btn-secondary position-relative"}>
                                <i className="bi bi-cart"/>
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0
                                <span className="visually-hidden">unseen products</span>
                            </span>
                            </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;
