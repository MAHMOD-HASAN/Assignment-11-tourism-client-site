import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const {id} = useParams();
    const [service, setService] = useState({});
    useEffect( () => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <Container className='my-4'>
            <Row xs={1} md={2}>
                <Col>
                <img src={service?.img} width = '100%' alt="" />
                </Col>

                <Col>
                 <h2>{service?.name}</h2>
                 <p className='fst-italic'>{service?.description}</p>
                 <Button variant='danger'>go back</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;