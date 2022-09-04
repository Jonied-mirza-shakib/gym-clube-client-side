import React from 'react';
import BmiCalculator from '../BmiCalculator/BmiCalculator';
import Coach from '../Coach/Coach';
import Gallery from '../Gallery/Gallery';
import HomeDescription from '../HomeDescription/HomeDescription';
import ProgramPricing from '../ProgramPricing/ProgramPricing';
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
            <ProgramPricing></ProgramPricing>
            <Coach></Coach>
            <BmiCalculator></BmiCalculator>
        </div>
    );
};

export default Home;