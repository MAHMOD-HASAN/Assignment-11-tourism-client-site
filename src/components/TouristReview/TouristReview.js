import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <Container>
          <h3 className='text-center text-success'>Top Tour Reviews</h3>
          <Row xs={1} md={12} className='border border-5'>
        
        <Slider {...settings} className='d-flex justify-content-evenly'>
          <Col>
          <img src='https://i.ibb.co/4M3q7Np/tourist1.jpg' alt=""/>
          </Col>
          <Col>
          <img src='https://i.ibb.co/37NcyvZ/tourist2.jpg' alt="" />
          </Col>
          <Col>
          <img src='https://i.ibb.co/XZs32mF/tourist3.jpg' alt="" />
          </Col>
          <Col>
            <img src='https://i.ibb.co/fXqCnBH/tourist4.jpg' alt="" />
          </Col>
        </Slider>
        </Row>
      </Container>
    );
  }
}
