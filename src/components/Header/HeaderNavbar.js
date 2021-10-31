import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// this is top Navbar

const HeaderNavbar = () => {

// call userAuth and get user and logOut function
    const {user, logOut} = useAuth();

// use some vanilla css
    const travel = {
        textTransform : 'uppercase',
        fontSize : '30px',
        color : 'yellow',
        marginBottom : '0',
        fontWeight : '700',
    }

    return (
       
    <Navbar collapseOnSelect sticky='top' expand="lg" bg='dark'>
        <Container>
            <Navbar.Brand style={travel}>
            t<span className='text-danger'>ravel</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                {
                  user.email ?
                     <>  
                      <Nav.Link as={Link} to='/manageBooking'>All Booking</Nav.Link>
                      <Nav.Link as={Link} to='/myBooking'>My Booking</Nav.Link>
                      
                    </>
                    :
                    <>
                      <Nav.Link as={Link} to='/addService'>Add Service</Nav.Link>
                      <Nav.Link as={Link} to='/deleteService'>Delete Service</Nav.Link>
                    </>
                }
                
                <Link to='/register'>
                </Link>

                {
                    user.email && <span className='text-light me-3'>{user.email}</span>
                }

                {
                    user.email ? 
                <Link to='/home'>
                <Button onClick={logOut} variant='danger' size='sm'>Log out</Button>
                </Link>
                    :
                    <Link to='/login'>
                    <Button variant='danger' size='sm' className='px-4'>LogIn</Button>
                    </Link>
                
                }
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default HeaderNavbar;