import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './BlogPost.css'

const BlogPost = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageApi = '19bf4cd9f8fbd132a1a0e00b0808ce6a';

    const onSubmit = (data) => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApi}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                if (result.success) {
                    const image = result.data.url;
                    const blogDescription = {
                        title: data.title,
                        description: data.description,
                        img: image
                    }
                    fetch('https://gym-clube-server-side-sa6u-git-main-jonied-mirza-shakib.vercel.app/blog', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(blogDescription),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                            if (data.insertedId) {
                                toast('Added blog Successfully')
                              } else {
                                toast.error('Added blog field')
                              }
                        })
                }
            })
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