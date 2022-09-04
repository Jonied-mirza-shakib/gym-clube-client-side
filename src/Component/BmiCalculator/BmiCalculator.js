import React, { useState } from 'react';
import './BmiCalculator.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const BmiCalculator = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    let bmiCalculator = (event) => {
        //prevent submitting to the server
        event.preventDefault()
     
        if (weight === 0 || height === 0) {
          toast('Please enter a valid weight and height')
        } else {
          let bmi = (weight / (height * height) * 703)
          setBmi(bmi.toFixed(1))
     
          // Logic for message
     
          if (bmi < 25) {
            setMessage('You are underweight')
          } else if (bmi >= 25 && bmi < 30) {
            setMessage('You are a healthy weight')
          } else {
            setMessage('You are overweight')
          }
        }
      }

    const reload = () => {
        window.location.reload()
    }

    return (
        <div className='bg-black'>
            <div className='bmi-calculator-main'>
                <h2>BMI Calculator</h2>
                <div class="card w-96 bg-base-200 shadow-2xl">
                    <div class="card-body">
                        <form onSubmit={bmiCalculator}>

                            <div>
                                <label>Weight (lbs)</label>
                                <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>

                            <div>
                                <label>Height (in)</label>
                                <input value={height} onChange={(event) => setHeight(event.target.value)} />
                            </div>

                            <div>
                                <button className='btn mb-3 mt-5' type='submit'>calculate</button>
                                <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
                            </div>
                        </form>
                        <div className='center'>
                            <h3>Your BMI is: {bmi}</h3>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BmiCalculator;