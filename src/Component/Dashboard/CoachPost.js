import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './CoachPost.css'
const CoachPost = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageApi = '19bf4cd9f8fbd132a1a0e00b0808ce6a';

    const onSubmit = async data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApi}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const programPricing = {
                        price: data.price,
                        description: data.description,
                        month: data.month,
                        img: image
                    }
                    fetch('http://localhost:5000/programPricing', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(programPricing),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('Success:', data);
                            if (data.insertedId) {
                                toast('Added Product Successfully')
                            } else {
                                toast.error('Added Product field')
                            }

                        })
                }
            })
        reset()
    };
    return (
        <div>
            <h1 className='coach-post-title'>Welcome To Your Coach Post</h1>
            <div className='card shadow-xl'>
                <div className='card-body'>
                    <div className='form'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label for="image">IMAGE</label>
                            <input className='w-full' type='file' {...register("image", { required: true })} />
                            {errors.image && <p>image is required</p>}

                            <label for="name">NAME</label>
                            <input type='text' {...register("name", { required: true })} placeholder='Name' />
                            {errors.name?.type === 'required' && "name is required"}

                            <textarea rows="10" {...register("description", { required: true })} placeholder='Description' />
                            <button className='btn btn-secondary' type="submit">ADD ITEM</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachPost;