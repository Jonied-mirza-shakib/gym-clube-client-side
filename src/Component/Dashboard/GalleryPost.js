import React from 'react';
import { useForm } from 'react-hook-form';
import './GalleryPost.css'

const GalleryPost = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const imgbbApi='19bf4cd9f8fbd132a1a0e00b0808ce6a';

    const onSubmit = (data) => {
        console.log(data)
        reset()
    };
    return (
        <div>
             <h1 className='gallery-dashboard-title'>Welcome To Your Gallery Post</h1>
             <div className='card'>
                <div className='card-body'>
                    <div className='form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                                <label for="image">IMAGE</label>
                                <input type='file' {...register("image", { required: true })} />
                                <button className='btn btn-secondary' type="submit">ADD ITEM</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPost;