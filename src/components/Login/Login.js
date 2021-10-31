
import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import firebaseInitialize from '../../firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

firebaseInitialize();

// Login component
// implement googleLogin and email, password Login system

const Login = () => {
    
    // all state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const redirec_uri = location.state?.from || '/home';

    // called useAuth and take signInUsingGoogle property
    const { signInUsingGoogle, newUser, oldUser, setUser, setIsLoading } = useAuth();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
        history.push(redirec_uri);
        })
        .catch(error => {
            setError('are u want exit ?')
        })
        .finally(() => setIsLoading(false))
    }

    // email change
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    // password change
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // checkbox
    const toggleForm = e => {
        setIsLogin(e.target.checked);
    }

    // registration / login button
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 characters ');
            return;
        }
        if (isLogin) {
            // oldUser means already logged in
            oldUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirec_uri);
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

        }
        else{
            // newUser means registration / signUp
            newUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirec_uri);
                console.log(user);
                setError('');
            })
           .catch(error => {
               setError('sorry u already logged In');
           })
        }
    }


    return (
        <Form className='px-3 mb-4'>
        <Row className='justify-content-center mt-5'>
            <Col lg='5' className='border border-3 py-5 px-5 rounded'>
                <h2 className='text-center text-primary'>Please {isLogin ? 'Login' : 'Register'}</h2>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'>{error}</p>

                <Form.Check onChange={toggleForm} type="checkbox" label="Already registerd" />

                <Button onClick={handleRegistration} variant='primary' size='sm' className='my-2 px-4 me-5'>
                   {isLogin ? 'Login' : 'Register'}
                </Button>

                <Button
                onClick={handleGoogleSignIn}
                variant='danger'
                className='px-4'
                size='sm'><i className="fab fa-google"></i>
                &nbsp;Google Sign In</Button>
            </Col>
        </Row>
    </Form>
       
    );
};

export default Login;