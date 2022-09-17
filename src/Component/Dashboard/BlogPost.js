import React from 'react';
import { useForm } from 'react-hook-form';
import './BlogPost.css'

const BlogPost = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const imgbbApi='19bf4cd9f8fbd132a1a0e00b0808ce6a';

    const onSubmit = (data) => {
        console.log(data)
        reset()
    };
    return (
        <div>
            <h1 className='blog-post-title'>Welcome To Your Blog Post</h1>
            <div className='card shadow-xl'>
                <div className='card-body'>
                    <div className='form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                                <label for="image">IMAGE</label>
                                <input type='file' {...register("image", { required: true })} />

                                <label for="title">TITLE</label>
                                <input type='text' {...register("title", { required: true })} placeholder='Title' />
                                {errors.title?.type === 'required' && "title is required"}

                                <textarea rows="10" {...register("description", { required: true })} placeholder='Description' />
                                <button className='btn btn-secondary' type="submit">ADD ITEM</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;