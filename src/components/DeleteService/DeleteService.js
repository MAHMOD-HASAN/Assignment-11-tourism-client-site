import React, { useEffect, useState } from 'react';

// this is DeleteService component

const DeleteService = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const sure = window.confirm('you want to delete ??');

        if(sure) {

            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method : 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
    
                if(data.deletedCount > 0) {
                    alert('deleted successfully')
                    const restData = services.filter(service => service._id !== id);
                    setServices(restData);
                  }
              });
        };
    
    };


    return (
        <div className='my-5'>
            <h3 className='text-center text-primary mb-3'>You can delete services</h3>
            {
             services.map(service => <div key={service._id}>

                <div className='w-75 mx-auto'>

                    <span className='w-50 d-inline-block fw-bold'>{service.name}</span>
                    <button onClick={() => handleDelete(service._id)} className='bg-danger ms-3 my-1'><i className="fas fa-trash-alt"></i></button>

                    </div>

                </div>)
            }
        </div>
    );
};

export default DeleteService;