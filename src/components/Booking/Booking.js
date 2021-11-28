import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';

// this is booking component

const Booking = () => {
    const {user} = useAuth();
    const {email, name} = user;
    
    // get input value by useing useRef Hook
    const nameRef = useRef();
    const emailRef = useRef();
    const dateRef = useRef();
    const placeRef = useRef();

    const handlerBooknow = e => {
        console.log(user);
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const date = dateRef.current.value;
        const place = placeRef.current.value;
        const newTourist = {name, email, date, place};
        fetch('https://stark-meadow-19264.herokuapp.com/booking', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newTourist)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('Your booking success');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className='form-container'>

            <h2><span className='text-danger'>Book</span> <span className='text-warning'>Now</span></h2>

            <form onSubmit={handlerBooknow}>

                <input type="text" ref={nameRef} value={name} placeholder='name'/>
                <input type="email" ref={emailRef} value={email} placeholder='email'/>
                <input type="date" ref={dateRef} placeholder='Date'/>
                <input type="text" ref={placeRef} placeholder='where to?' />
                <input type="submit" value="Book Now" />

            </form>

        </div>
    );
};

export default Booking;