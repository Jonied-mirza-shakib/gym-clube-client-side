import React from 'react';
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    return (
      <div className='bg-black'>
          <div className='choose-us-main'>
            <div className='choose-us-description'>
                <h1>WHY CHOOSE US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
                    tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                <div className='training-program'>
                    <h2>12</h2>
                    <p>Training Program</p>
                </div>
                <div className='experience'>
                    <h2>14</h2>
                    <p>Years Of Experience</p>
                </div>
                <div className='client'>
                    <h2>1000</h2>
                    <p>Happy Client</p>
                </div>
                <div className='best-trainer'>
                    <h2>50</h2>
                    <p>Best Trainer</p>
                </div>
            </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;