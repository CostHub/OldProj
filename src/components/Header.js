import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../Assets/logo.svg';

import Headerc from "../Headerc.css";

import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Products from "../Pages/Products";


export default class Header extends  Component {
    render() {
        return (

            <>
                <Navbar expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            /> Signium
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav ClassName="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/products"> Blog </Nav.Link>
                                <Nav.Link href="/about"> About us </Nav.Link>
                                <Nav.Link href="/contacts"> Shop </Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="ml-5"
                                />
                                <Button variant="outline-info"> Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path ="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/products" component={Products} />

                    </Switch>
                </Router>
            </>
        );

    }

}
