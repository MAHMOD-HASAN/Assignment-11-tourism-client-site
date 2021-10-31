import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res => {
             if(res.data.insertedId) {
                 alert('successfully added service');
                 reset();
             }
        })
    }

    return (
        <div className='form-container'>
          <h2 className='text-center fs-3 fst-italic text-secondary'>Please Add A Service</h2>

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


