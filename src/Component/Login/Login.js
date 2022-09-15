import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate=useNavigate()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='bg-black'>
            <div className='login-main'>
                <div className='card shadow-xl'>
                    <div className='card-body'>
                        <div className='form'>
                            <div className='login-title'>
                                <h1>LOGIN NOW</h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label for="name">NAME</label>
                                <input className='mt-2 mb-5' {...register("name", { required: true })} placeholder='Your Name' />
                                {errors.name?.type === 'required' && "name is required"}
                                <label for="email">EMAIL</label>
                                <input className='mt-2 mb-5' {...register("mail", { required: "Email Address is required" })} placeholder='Your Email' />
                                <p>{errors.mail?.message}</p>
                                <label for="password">PASSWORD</label>
                                <input className='mt-2' {...register("password", { required: true })} placeholder='Your Password' />
                                {errors.password && <p>Password is required</p>}
                                <button className='btn btn-secondary' type="submit">LOGIN</button>
                            </form>
                            <a className='a' onClick={()=>navigate('/signUp')}>ARE YOU NEW USER ! PLEASE SIGNUP</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;