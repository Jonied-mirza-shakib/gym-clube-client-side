import React from 'react';
import HomeDescription from '../HomeDescription/HomeDescription';
import Carousel from './Carousel';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <HomeDescription></HomeDescription>
        </div>
    );
};

export default Home;