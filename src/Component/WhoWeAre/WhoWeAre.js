import React from 'react';
import './WhoWeAre.css'

const WhoWeAre = () => {
    return (
      <div className='bg-black'>
          <div className='bg-black' style={{paddingTop:'50px',paddingBottom:'50px'}}>
            <div className='who-were-main'>
                <div className='who-we-are-description'>
                    <h1>WHO WE ARE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. <br/>
                        Risus commodo viverra maecenas accumsan lacus vel facilisis</p>
                </div>
            </div>
        </div>
        <div className='free-consultation'>
        <a href="#">FREE CONSULTATION</a>
        </div>
      </div>
    );
};

export default WhoWeAre;