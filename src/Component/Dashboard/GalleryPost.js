import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './GalleryPost.css'

const GalleryPost = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

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
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const image = result.data.url;
                    const galleryDetails = {
                        img: image
                    }
                    fetch('https://gym-clube-server-side-sa6u-git-main-jonied-mirza-shakib.vercel.app/gallery', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(galleryDetails),
                    })
                        .then((response) => response.json())
                        .then((result) => {
                            console.log('Success:', result);
                            if (result.insertedId) {
                                toast('Added gallery Successfully')
                              } else {
                                toast.error('Added gallery field')
                              }
                        })
                }
            })
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