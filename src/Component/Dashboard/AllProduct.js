import React, { useEffect, useState } from 'react';
import './AllProduct.css'

const AllProduct = () => {
    const [pricing, setPricing] = useState([]);
    useEffect(() => {
        fetch('https://gym-clube-server-side-sa6u-git-main-jonied-mirza-shakib.vercel.app/programPricing')
            .then(res => res.json())
            .then(data => setPricing(data))
    }, [])
    return (
        <div className='programing-pricing-dashboard'>
           <h1 className='allProduct-title'>All Program Pricing</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
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
    );
};

export default AllProduct;