import React from 'react';
import { Carousel } from 'react-bootstrap';

// this is banner section
// it contain 3 images

const Banner = () => {
    return (

            <Carousel className='carousel-dark'>

            <Carousel.Item>
                <img
                style={{width : '100%', height : '500px'}}
                src="https://i.ibb.co/dpBW9rW/banner1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className='text-dark'>Nature</h1>
                <h3>Best place to visit for couple</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                style={{width : '100%', height : '500px'}}
                src="https://i.ibb.co/VJ1rDgs/banner2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className='text-dark'>Weather</h1>
                <h3>Travel in January for warm weather</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                style={{width : '100%', height : '500px'}}
                src="https://i.ibb.co/1z08Fz3/banner3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className='text-dark'>Mountain</h1>
                <h3>Best place to visit in February 2022</h3>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
        

    );
};

export default Banner;
