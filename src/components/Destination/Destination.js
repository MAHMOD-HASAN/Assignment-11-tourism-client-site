import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Destination = () => {
    const destinations = [
        {id : 1, name : 'Egypt', img : 'https://i.ibb.co/Nsmgqpd/destination1.jpg'},
        {id : 2, name : 'London', img : 'https://i.ibb.co/kmX9Gqj/destination2.jpg'},
        {id : 3, name : 'Beach', img : 'https://i.ibb.co/mTgxYQC/destination4.jpg'},
    ]

    const name = {
        position : 'absolute',
        top : '100px',
        left : '120px',
        padding : '0px',
        color : 'white',
        fontWeight : 'bold',
    }
    return (
        <Container className='my-5'>
            <h1 className='text-center text-warning'>Destination</h1>
        
            <Row xs={1} md={3}>
                {
                    destinations.map(destination => <div key={destination.id}>
                        <Col className='border border-2 border-primary rounded-2 my-3 bg-light position-relative'>
                        <h2 style={name}>{destination.name}</h2>
                        <img 
                        style={{width : '100%', height : '250px'}}
                        src={destination.img} alt="" />
                        </Col>
                    </div>)
                }
            </Row>
        </Container>
    );
};

export default Destination;

