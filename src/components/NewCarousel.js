import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'

import img8 from '../Assets/8.jpg'
import img9 from '../Assets/9.jpg'
import img12 from '../Assets/12.jpg'
import img7 from '../Assets/7.jpg'
import img14 from '../Assets/14.jpg'
import img15 from '../Assets/15.jpg'

export default class NewCarousel extends Component {

    render() {
        return (

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img7}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>We bring music to life </h1>
                        <p>Let's pick the best musical instrument for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img9}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img12}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img15}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>We bring music to life </h1>
                        <p>Let's pick the best musical instrument for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img8}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>We bring music to life </h1>
                        <p>Let's pick the best musical instrument for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img14}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>We bring music to life </h1>
                        <p>Let's pick the best musical instrument for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
