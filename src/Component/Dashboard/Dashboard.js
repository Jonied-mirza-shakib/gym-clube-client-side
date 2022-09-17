import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    const menu = <>
        <li><Link to='/dashboard'>MY PROFILE</Link></li>
        <li><Link to='/dashboard/allUser'>ALL USER</Link></li>
        <li><Link to='/dashboard/programingPricing'>PROGRAMING PRICING POST</Link></li>
        <li><Link to='/dashboard/blogPost'>BLOG POST</Link></li>
        <li><Link to='/dashboard/galleryPost'>GALLERY POST</Link></li>
        <li><Link to='/dashboard/coachPost'>COACH POST</Link></li>
        <li><Link to='/dashboard/allPricing'>ALL PROGRAMING PRICING</Link></li>
        <li><Link to='/dashboard/allBlog'>ALL BLOG</Link></li>
        <li><Link to='/dashboard/allGallery'>ALL GALLERY</Link></li>
        <li><Link to='/dashboard/allCoach'>ALL COACH</Link></li>
    </>
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
        <h1 className='dashboard-title'>Welcome To Your Dashboard</h1>
        <Outlet></Outlet>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
            {menu}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;