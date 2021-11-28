import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// This is Services component
// All service are here

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://stark-meadow-19264.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <Container className='my-5 border-bottom border-5 bordeer-primary pb-5'>
            <h1 className='text-center text-danger'>OUR TOUR SERVICES</h1>
            <Row xs={1} md={2} lg={3}>
               {
                   services.map(service => <Service
                    key={service._id}
                    service={service}
                   >
                        
                   </Service>)
               }
            </Row>
        </Container>
        
    );
};

export default Services;

function Service({ service }) {
    const {_id, name, img, price, guest} = service;
    return (

        <div className='gy-3 text-center'>
            <Col style={{border : '2px solid lightgrey', borderRadius : '10px', backgroundColor : 'lightcyan'}}>
                <img
                width = '100%'
                height = '240px'
                variant="top" src={img} alt=""/>

                <h3>{name}</h3>
                <p><span>guest : {guest}</span>&nbsp; <span>price : {price}</span></p>
                <Link to={`/booking/${_id}`}>
                <Button variant="primary" className='w-100'>Book Now</Button>
                </Link>
            </Col>
        </div>
    )
}








