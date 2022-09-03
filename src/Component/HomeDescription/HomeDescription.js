import React from 'react';
import './HomeDescription.css'
import { FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

const HomeDescription = () => {
    return (
       <div className='home-description-main'>
         <div className='home-description'>
            <h3> <span className='home-quote'>"</span> Want to be healthy and have a perfect body? BLACKFIT is the right decision for you! It will create your personal training program and balance your diet so you could get the
                shape of your dream shortly! <span className='home-quote'>"</span></h3>
        </div>
       </div>
    );
};

export default HomeDescription;