import React, {Component} from 'react';
import NewCarousel from "../components/NewCarousel";
import {Button, Card, CardDeck, Container} from "react-bootstrap";
import {CardBody, CardText, CardTitle} from "react-bootstrap/Card";

export default class Home extends Component {
    render() {
        return (
            <>
                <NewCarousel/>
                <Container>
                    <h2 className="text-center m-4"> What we can offer</h2>
                    <CardDeck>
                        <Card bg="secondary" border="info" text="dark">
                            <Card.Body>
                                <Card.Title> Quality </Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod
                                    tempor incididunt u
                                </Card.Text>
                                <Button variant="primary" href=""> learn more </Button>
                            </Card.Body>
                            <Card.Img
                                variant="top"
                                src="https://guitaruser.ru/wp-content/uploads/2013/07/guitar-amplifier.jpeg" />
                        </Card>

                        <Card bg="secondary">
                            <Card.Img
                                variant="top"
                                src="https://images.squarespace-cdn.com/content/v1/53dfcee2e4b0c0da377c65c7/1456387659068-H5DHBEIOVJT9EN5N4331/ke17ZwdGBToddI8pDm48kGRKL4JIl0FV9_gnSO4xknsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dr_4a0Jznzw0OCRTJVMM15xP37X5RQsGYt-cipN4dBgkpC969RuPXvt2ZwyzUXQf7Q/image-asset.jpeg?format=1000w"
                            />
                            <Card.Body>
                                <Card.Title> Guarantees </Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod
                                    tempor incididunt u
                                </Card.Text>
                                <Button variant="dark"> learn more </Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://pop-music.ru/upload/medialibrary/b86/b86794090ebb370c7a80a59e0afb276f.jpg"
                            />
                            <Card.Body>
                                <Card.Title> Reliability </Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod
                                    tempor incididunt u
                                </Card.Text>
                                <Button variant="dark"> learn more </Button>
                            </Card.Body>
                        </Card>
                        <Card bg="secondary" border="info" text="dark">
                            <Card.Body>
                                <Card.Title> Quality </Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod
                                    tempor incididunt u
                                </Card.Text>
                                <Button variant="primary" href=""> learn more </Button>
                            </Card.Body>
                            <Card.Img
                                variant="top"
                                src="https://guitaruser.ru/wp-content/uploads/2013/07/guitar-amplifier.jpeg" />
                        </Card>

                    </CardDeck>

                </Container>
            </>
        );
    }
}

