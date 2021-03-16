import React, {Component} from 'react';
import {Col, Container, Media, Row} from "react-bootstrap";


export default class Blog extends Component {
    render() {
        return (
            <Media className="m-5">
                <img
                    width={150}
                    height={150}
                    className="mr-3"
                    src="https://24tv.ua/resources/photos/news/201902/1119058.jpg?1553707761000"
                />
                <Media.Body>
                    <h5> Blog post</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commo
                    </p>
                </Media.Body>
            </Media>

        );
    }
}
