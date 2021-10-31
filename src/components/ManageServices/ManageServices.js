import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {

            if(data.deletedCount) {
                alert('deleted successfully')
                const restData = services.filter(service => service._id !== id);
                setServices(restData);
              }
          })
        
    }
    return (
        <div>
            {
                services.map(service => <div key={service._id} style={{textAlign : 'center'}}>
                    <span>{service.name}</span>
                    <button onClick={() => handleDelete(service._id)} className='bg-danger ms-3 my-1'><i className="fas fa-trash-alt"></i></button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;