import React, {Component} from 'react';
import Blog from "../components/blog";
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
import {CardBody, CardText, CardTitle} from "react-bootstrap/Card";


export default class Products extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5"> Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item> Something new</ListGroup.Item>
                                <ListGroup.Item> What else</ListGroup.Item>
                                <ListGroup.Item> creative ideas</ListGroup.Item>
                                <ListGroup.Item> Something special</ListGroup.Item>
                                <ListGroup.Item> discounts</ListGroup.Item>

                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title> Side widget</Card.Title>
                                <Card.Text>
                                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
