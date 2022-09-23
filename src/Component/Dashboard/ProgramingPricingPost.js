import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './ProgramingPricingPost.css'

const ProgramingPricingPost = () => {
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
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const image = result.data.url;
                    const programPricingDetails = {
                        price: data.price,
                        month: data.month,
                        description: data.description,
                        img: image
                    }
                    fetch('https://gym-clube-server-side-sa6u-git-main-jonied-mirza-shakib.vercel.app/programPricing', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(programPricingDetails),
                    })
                        .then((response) => response.json())
                        .then((result) => {
                            console.log('Success:', result);
                            if (result.insertedId) {
                                toast('Added Program Pricing Successfully')
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
            <h1 className='programing-pricing-title'>WelCome To Your Programing Pricing Post</h1>
            <div className='card shadow-xl'>
                <div className='card-body'>
                    <div className='form'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label for="image">IMAGE</label>
                            <input type='file' {...register("image", { required: true })} />

                            <label for="price">PRICE</label>
                            <input type='text' {...register("price", { required: true })} placeholder='Price' />
                            {errors.price?.type === 'required' && "price is required"}

                            <label for="month">MONTH</label>
                            <input type='text' {...register("month", { required: true })} placeholder='Month' />
                            {errors.month && <p>month is required</p>}


                            <textarea rows="10" {...register("description", { required: true })} placeholder='Description' />
                            <button className='btn btn-secondary' type="submit">ADD ITEM</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramingPricingPost;