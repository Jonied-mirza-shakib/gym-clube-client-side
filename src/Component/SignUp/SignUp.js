import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'

const SignUp = () => {
    const [error,setError]=useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate=useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth);
      let errorMessage;
      if (emailError) {
       errorMessage=<p className='text-red text-xl'>{emailError.message}</p>
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if(user){
        navigate('/')
      }
    const onSubmit = (data) => {
        console.log(data)
        createUserWithEmailAndPassword(data?.mail,data?.password)
        
    }
    return (
        <div className='bg-black'>
            <div className='signUp-main'>
            <div className='card shadow-xl'>
                    <div className='card-body'>
                        <div className='form'>
                            <div className='signUp-title'>
                                <h1>SIGNUP NOW</h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label for="first name">FIRST NAME</label>
                                <input className='mt-2 mb-5' {...register("firstName", { required: true })} placeholder='Your First Name' />
                                {errors.firstName?.type === 'required' && "firstName is required"}
                                <label for="last name">LAST NAME</label>
                                <input className='mt-2 mb-5' {...register("lastName", { required: true })} placeholder='Your Last Name' />
                                {errors.lastName?.type === 'required' && "lastName is required"}
                                <label for="email">EMAIL</label>
                                <input className='mt-2 mb-5' {...register("mail", { required: "Email Address is required" })} placeholder='Your Email' />
                                <p>{errors.mail?.message}</p>
                                <label for="password">PASSWORD</label>
                                <input className='mt-2' {...register("password", { required: true })} placeholder='Your Password' />
                                {errors.password && <p>Password is required</p>}
                                <button className='btn btn-secondary' type="submit">SIGNUP</button>
                            </form>
                            {errorMessage}
                            <a className='a' onClick={()=>navigate('/login')}>ARE YOU OLD USER ! PLEASE LOGIN</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;