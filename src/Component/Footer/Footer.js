import React, { useEffect, useState } from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const Footer = () => {
    const [gallery, setGallery] = useState([]);
    // useEffect(() => {
    //     fetch('gallery.json')
    //         .then(res => res.json())
    //         .then(data => setGallery(data))
    // }, [])
    return (
        <div className='footer-main'>
            <div className='footer-details grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='footer-section-one'>
                    <div className='address-section'>
                        <h2>Address:</h2>
                        <p>4567:MohammadPur Dhaka</p>
                    </div>
                    <div className='phones-section'>
                        <h2>Phones:</h2>
                        <p>+8800 154698725</p>
                        <p>+8800 154698725</p>
                    </div>
                    <div className='working-section'>
                        <h2>Working Hours:</h2>
                        <p>Monday-Sunday: 07:00 - 22:00</p>
                    </div>
                    <div className='email-section'>
                        <h2>Email:</h2>
                        <p>info@abc.com</p>
                    </div>
                    <div className='social-link'>
                        <h2>Our Socials:</h2>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                            <span><BsFacebook /></span>
                            <span><AiFillLinkedin /></span>
                            <span><AiFillTwitterSquare /></span>
                        </div>
                    </div>
                </div>
                <div className='footer-second-two'>
                    <h2>INSTAGRAM</h2>
                    <div className='grid sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 lg:gap-3 cursor-pointer'>
                        {
                            gallery.slice(0,6).map(allGallery =>
                                <div className='shadow-2xl'>
                                    <img className='w-full' src={allGallery.img} alt="" />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='footer-three-section'>
                    <h2>NEWSLETTER</h2>
                    <p>GYMFIT – fitness health center where your body gets its shape! Start training now to stay fit and healthy all year round!</p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5'>
                        <input type="email" name="email" placeholder='Enter you email address' required />
                        <button type="submit">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;