import React, { useEffect, useState } from 'react';
import './Coach.css'
import 'animate.css';

const Coach = () => {
    const [coach, setCoach] = useState([]);
    useEffect(() => {
        fetch('coach.json')
            .then(res => res.json())
            .then(data => setCoach(data))
    }, [])
    return (
        <div className='bg-black'>
            <div className='coach-main'>
                <div className='coach-description'>
                    <h1>OUR COACHES</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 shadow-2xl'>
                    {
                        coach.map(allCoach => <div key={allCoach.id} className='animate__animated animate__fadeInLeftBig'>
                            <img src={allCoach.img} alt="" />
                            <div className='allCoach-description'>
                            <h3>{allCoach.name}</h3>
                            <p>{allCoach.description}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Coach;