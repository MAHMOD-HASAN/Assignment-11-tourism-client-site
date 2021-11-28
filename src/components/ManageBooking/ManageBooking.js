import React, { useEffect, useState } from 'react';

// ManageBooking component
const ManageBooking = () => {
    const [bookingStore, setBookingStore] = useState([]);
    useEffect( () => {
        fetch('https://stark-meadow-19264.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => setBookingStore(data))
    }, []);

    const handleDelete = id => {
        const sureDelete = window.confirm('you want to delete ??')
        if(sureDelete) {
            const url = `https://stark-meadow-19264.herokuapp.com/booking/${id}`;
            fetch(url, {
                method : 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('deleted successfully')
                    const restData = bookingStore.filter(book => book._id !== id);
                    setBookingStore(restData);
                };
            });
        };
  
    };

    return (
        <div className='mt-3'>
            
    {
        bookingStore.map(book => <div  key={book._id}>
            <p className='w-75 mx-auto border-bottom border-secondary'>
                <span style={{width:'200px', display:'inline-block'}}>{book.email}</span>
                <span style={{width:'200px', display:'inline-block'}}>{book.name}</span>
                <span style={{width:'200px', display:'inline-block'}}>{book.date}</span>
                <span style={{width:'200px', display:'inline-block'}}>{book.place}</span>
                <button onClick={() => handleDelete(book._id)} className='bg-danger ms-3 my-1'><i className="fas fa-trash-alt"></i></button>
            </p>
            </div>)
    }
        </div>
    );
};

export default ManageBooking;