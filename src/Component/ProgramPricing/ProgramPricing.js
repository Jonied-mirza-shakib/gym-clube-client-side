import React, { useEffect, useState } from 'react';
import './ProgramPricing.css'

const ProgramPricing = () => {
    const [pricing, setPricing] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/programPricing')
            .then(res => res.json())
            .then(data => setPricing(data))
    }, [])
    return (
        <div className='overlay'>
            <div className='programing-pricing-main'>
                <div className='programing-pricing-description'>
                    <h2>PROGRAM PRICING</h2>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            pricing.map(allPrice =>
                                <div className='card animate__animated animate__fadeInRightBig'>
                                    <img className='w-full' src={allPrice.img} alt="" />
                                    <div className='card-description'>
                                        <p>{allPrice.description}</p>
                                        <h5>$ {allPrice.price}</h5>
                                        <h6>{allPrice.month}</h6>
                                        <div className='free-consultation'>
                                            <a href="#">PURCHASE NOW</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramPricing;