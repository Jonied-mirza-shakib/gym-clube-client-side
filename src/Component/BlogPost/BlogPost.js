import React, { useEffect, useState } from 'react';
import './BlogPost.css'

const BlogPost = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://gym-clube-server-side-sa6u-git-main-jonied-mirza-shakib.vercel.app/blog')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div className='bg-black'>
            <div className='blog-post-main'>
               <div className='blog-post-description'>
               <h1>LATEST</h1>
                <h2>BLOG POSTS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
                    tempor incididunt ut labore et dolore magna aliqua</p>
               </div>
               <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    post.map(allPost=><div key={allPost.id} className='post'>
                        <figure>
                            <img src={allPost.img} alt=""/>
                            <h1>{allPost.title}</h1>
                        </figure>
                    </div>
                    )
                }
               </div>
            </div>
        </div>
    );
};

export default BlogPost;