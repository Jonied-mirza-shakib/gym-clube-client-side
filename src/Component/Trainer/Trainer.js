import React from 'react';
import Coach from '../Coach/Coach';
import './Trainer.css'

const Trainer = () => {
    return (
        <div className='bg-black'>
            <div className='trainer-main'>
                <Coach></Coach>
            </div>
        </div>
    );
};

export default Trainer;