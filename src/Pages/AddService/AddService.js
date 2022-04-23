import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Please Add a Service</h1>
            <form className='d-flex flex-column justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true })} />
                <textarea className='mb-2' placeholder='description' {...register("description", { required: true })} />
                <input className='mb-2' placeholder='price' type='number' {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type='text' {...register("img")} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;