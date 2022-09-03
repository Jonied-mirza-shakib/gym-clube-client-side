import React from 'react';
import HomeDescription from '../HomeDescription/HomeDescription';
import Service from '../Service/Service';
import Carousel from './Carousel';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <HomeDescription></HomeDescription>
            <Service></Service>
        </div>
    );
};

export default Home;