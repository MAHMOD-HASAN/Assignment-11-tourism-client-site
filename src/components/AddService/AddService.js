import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

// This is AddServices component

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://arcane-brushlands-48998.herokuapp.com/services', data)
        .then(res => {
             if(res.data.insertedId) {
                 alert('successfully added service');
                 reset();
             };
        });
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


