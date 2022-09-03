import React from 'react';
import './Service.css'
import serviceImg1 from '../../img/service-1.jpg'
import serviceImg2 from '../../img/service-2.jpg'
import serviceImg3 from '../../img/service-3.jpg'
import serviceImg4 from '../../img/service-4.jpg'

const Service = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 service-main'>
            <div className='card-1 shadow-2xl'>
            <h2>FITNESS</h2>
            </div>
            <div className='card-2 shadow-2xl'>
            <h2>BODYBUILDING</h2>
            </div>
            <div className='card-3 shadow-2xl'>
                <h2>CROSSFIT GYM</h2>
            </div>
            <div className='card-4 shadow-2xl'>
            <h2>CARDIO</h2>
            </div>
        </div>
    );
};

export default Service;