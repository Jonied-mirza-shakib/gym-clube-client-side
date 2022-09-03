import React from 'react';
import Gallery from '../Gallery/Gallery';
import HomeDescription from '../HomeDescription/HomeDescription';
import Service from '../Service/Service';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Carousel from './Carousel';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <HomeDescription></HomeDescription>
            <Service></Service>
            <WhoWeAre></WhoWeAre>
            <Gallery></Gallery>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;