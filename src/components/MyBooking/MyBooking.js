import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

// this is MyBooking Component
// live site link added everywhere

const MyBooking = () => {

    const {user} = useAuth();

    const [myBooking, setMyBooking] = useState([]);
    useEffect( () => {
        fetch('https://arcane-brushlands-48998.herokuapp.com/tourist')
        .then(res => res.json())
        .then(data => {
            const mached = data.filter(dt=> dt.email === user.email)
            setMyBooking(mached);
        })
    }, [user.email]);

    const handleDelete = id => {

        const sureDelete = window.confirm('you want to delete ??');

        if(sureDelete) {
            const url = `https://arcane-brushlands-48998.herokuapp.com/tourist/${id}`;
            fetch(url, {
                method : 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('deleted successfully')
                    const restData = myBooking.filter(book => book._id !== id);
                    setMyBooking(restData);
                };
            });
        };
    };

    return (
        <>
        {
            myBooking.map(book => <div key={book._id} className='my-5'>

                <p className='w-75 mx-auto border-bottom border-secondary'>
                <span style={{width:'200px', display:'inline-block'}}>{book?.email}</span>
                <span style={{width:'200px', display:'inline-block'}}>{book?.name}</span>
                <span style={{width:'200px', display:'inline-block'}}>{book?.date}</span>
                <span style={{width:'200px', display:'inline-block'}}>{book?.place}</span>

                <button onClick={() => handleDelete(book._id)} className='bg-danger ms-3 my-1'><i className="fas fa-trash-alt"></i></button>
                </p>

 
            </div>)
        }
       </>
    );
};



export default MyBooking;