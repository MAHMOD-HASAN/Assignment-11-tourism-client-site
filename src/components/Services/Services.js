import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <Container className='my-5'>
            <h1 className='text-center text-warning'>Services</h1>
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
        <Col>
            <Card.Img 
            height = '250px'
            variant="top" src={img} />

            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p><span>guest : {guest}</span>&nbsp; <span>price : {price}</span></p>
            <Link to={`/booking/${_id}`}>
            <Button variant="primary" className='w-100'>Book Now</Button>
            </Link>
            </Card.Body>
        </Col>
    )
}













/*
https://i.ibb.co/2SfR0hM/sentmartins.jpg
https://i.ibb.co/PgXcpTv/sixty-dome-mosque.jpg
https://i.ibb.co/0qX32Sx/sundarban.jpg
https://i.ibb.co/6swvHL1/sajekvalley.jpg
https://i.ibb.co/NCvkC6M/captai-lake.jpg
https://i.ibb.co/rkpk1C0/coxs-s-Bazar.jpg
*/
