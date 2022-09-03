import React, { useEffect, useState } from 'react';
import './Gallery.css'

const Gallery = () => {
    const [gallery,setGallery]=useState([]);
    useEffect(()=>{
        fetch('gallery.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setGallery(data)
        })
    },[])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 lg:gap-3 gallery'>
            {
                gallery.map(allGallery=>
                   <div className='shadow-2xl'>
                    <img className='w-full' src={allGallery.img} alt=""/>
                   </div>
                    )
            }
        </div>
    );
};

export default Gallery;