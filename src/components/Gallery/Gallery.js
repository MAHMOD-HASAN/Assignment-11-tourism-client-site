import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Gallery = () => {
    const gallery = [
        {id : 1, img : 'https://i.ibb.co/Nsmgqpd/destination1.jpg'},
        {id : 2, img : 'https://i.ibb.co/kmX9Gqj/destination2.jpg'},
        {id : 3, img : 'https://i.ibb.co/mTgxYQC/destination4.jpg'},
        {id : 4, img : 'https://i.ibb.co/VSq64xP/service2.jpg'},
        {id : 5, img : 'https://i.ibb.co/wW30yG4/service5.jpg'},
        {id : 6, img : 'https://i.ibb.co/MZFnQTJ/service1.jpg'},
    ]


    return (
        <Container className='my-5'>
            <h1 className='text-center text-primary'>GALLERY</h1>
        
            <Row xs={1} md={3}>
                {
                    gallery.map(gallery => <div key={gallery.id}>
                        <Col className='border border-2 border-primary rounded-2 my-3 bg-light position-relative'>
                        <img 
                        style={{width : '100%', height : '250px'}}
                        src={gallery.img} alt="" />
                        </Col>
                    </div>)
                }
            </Row>
        </Container>
    );
};

export default Gallery;

