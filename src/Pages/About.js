import React, {Component} from 'react';
import {Container, Tab, Row, Col, Nav, Form, Button} from "react-bootstrap";
import { Statistic } from 'semantic-ui-react'

import img_1 from '../photo/team.jpg'
import img_2 from '../photo/team2.jpg'
import img_3 from '../photo/new1.jpeg'
import img_5 from '../photo/new2.jpeg'
import img_6 from '../photo/blog2.jpeg'
import img_4 from '../photo/blog.jpeg'


export default class About extends Component {
    render() {
        return (
            <Container>



                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">

                                <Nav.Item>
                                    <Nav.Link eventKey="first">Our Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Why us?</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Whats new</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Endorsers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Support</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3" >
                                <Tab.Pane eventKey="first">
                                    <Container ml="5" mt="3" mb="4">
                                    <Statistic.Group >
                                        <Statistic label='Saves' value='22' />
                                        <Statistic label='Signups' value='Three Thousand' text />
                                        <Statistic label='Flights' value='5' />
                                        <Statistic label='Team Members' value='42' />
                                    </Statistic.Group>
                                    </Container>
                                    <img height="300" src={img_1}/>

                                    <p>
                                        The “meet the team” page on any website is a key recruitment tool. Potential applicants want to
                                        know that your company is a fun,
                                        people-centric place to work – and the team page is the perfect place to communicate that.
                                        </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img height="450" src={img_2}/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img height="300" src={img_6}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                                    <p>
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in</p>
                                        <p>
                                            Vivamus malesuada odio aliquam sagittis posuere. Morbi non neque vitae diam gravida rhoncus
                                            sit amet non lacus. Sed justo diam, convallis quis rutrum eu, auctor non justo. Curabitur libero
                                        </p>
                                            <p>
                                                felis, aliquam ut imperdiet non, lobortis a nisi. Nullam lorem elit, posuere quis tincidunt ut,
                                                viverra a nisl. Aliquam nec erat sodales, vehicula enim a, euismod sapien. Nullam accumsan mauris </p>
                                                <p>eget urna porttitor commodo in sit amet nibh. Phasellus sit amet justo
                                                    luctus, convallis arcu eget, porttitor tortor. Duis interdum augue ex, id convallis lorem condimentum id. </p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img height="300" src={img_5}/>
                                    <p>
                                        <p>
                                            Vivamus malesuada odio aliquam sagittis posuere. Morbi non neque vitae diam gravida rhoncus
                                            sit amet non lacus. Sed justo diam, convallis quis rutrum eu, auctor non justo. Curabitur libero
                                        </p>
                                        <p>
                                            felis, aliquam ut imperdiet non, lobortis a nisi. Nullam lorem elit, posuere quis tincidunt ut,
                                            viverra a nisl. Aliquam nec erat sodales, vehicula enim a, euismod sapien. Nullam accumsan mauris </p>
                                        <p>
                                            Vivamus malesuada odio aliquam sagittis posuere. Morbi non neque vitae diam gravida rhoncus
                                            sit amet non lacus. Sed justo diam, convallis quis rutrum eu, auctor non justo. Curabitur libero
                                        </p>
                                        <p>
                                            felis, aliquam ut imperdiet non, lobortis a nisi. Nullam lorem elit, posuere quis tincidunt ut,
                                            viverra a nisl. Aliquam nec erat sodales, vehicula enim a, euismod sapien. Nullam accumsan mauris </p>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">

                                    <p>
                                        <Container style={{width : "500px"}} >
                                            <h1 className="text-center">Contact us</h1>
                                            <form>
                                                <Form.Group controlId ="FormBasicEmail">
                                                    <Form.Label> Email address </Form.Label>
                                                    <Form.Control type="email" placeholder="Enter your email"/>
                                                    <Form.Text>
                                                        We'll never share your e-mail with anyone else
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label> Example text area</Form.Label>
                                                    <Form.Control as="textarea" rows ="3"/>
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Check type="Checkbox" label="check me out" />
                                                </Form.Group>
                                                <Button variant="primary" type="submit"> Submite </Button>

                                            </form>
                                        </Container>
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>


                        </Col>
                    </Row>

                </Tab.Container>


            </Container>

        )
    }
}
