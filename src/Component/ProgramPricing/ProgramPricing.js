import React, { useEffect, useState } from 'react';
import './ProgramPricing.css'

const ProgramPricing = () => {
    const [pricing, setPricing] = useState([]);
    useEffect(() => {
        fetch('pricing.json')
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
                            pricing.map(pricings =>
                                <div className='card'>
                                    <img className='w-full' src={pricings.img} alt="" />
                                    <div className='card-description'>
                                        <p>{pricings.description}</p>
                                        <h5>$ {pricings.price}</h5>
                                        <h6>{pricings.month}</h6>
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