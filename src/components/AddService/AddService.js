import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

// This is AddServices component

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://stark-meadow-19264.herokuapp.com/service', {
          method : 'POST',
          headers : {
              'content-type' : 'application/json'
          },
          body : JSON.stringify(data)
     })
     .then(res => res.json())
     .then(data => {
         if(data.insertedId) {
             alert('successfully added product');
         }
         reset();
     })
    };

    return (
        <div className='form-container'>
         <h2><span className='text-danger'>Add</span> <span className='text-warning'>Service</span></h2>

        <form onSubmit={handleSubmit(onSubmit)}>
      
          <input {...register("name", { required : true})} placeholder='Where to?'/>
          <input {...register("guest")} placeholder='Number of guests'/>
          <input {...register("price")} placeholder='Price'/>
          <input {...register("img")} placeholder='image-url'/>
          <textarea {...register("description")} placeholder='description...'/>
          <input type="submit" />
      
        </form> 
      
      </div>
    );
};

export default AddService;


/* 

https://i.ibb.co/PgXcpTv/sixty-dome-mosque.jpg
https://i.ibb.co/0qX32Sx/sundarban.jpg
https://i.ibb.co/rkpk1C0/coxs-s-Bazar.jpg
https://i.ibb.co/2SfR0hM/sentmartins.jpg
https://i.ibb.co/NCvkC6M/captai-lake.jpg
https://i.ibb.co/6swvHL1/sajekvalley.jpg
*/



