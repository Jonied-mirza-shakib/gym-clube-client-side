import React from 'react';
import { GiTigerHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT US</Link></li>
        <li><Link to='/trainer'>TRAINER</Link></li>
        <li><Link to='/shop'>SHOP</Link></li>
        <li><Link to='/blog'>BLOG</Link></li>
        <li><Link to='/contact'>CONTACT US</Link></li>
    </>
    return (
        <div>
            <div class="navbar bg-black text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a class="btn btn-ghost lg:text-3xl"><GiTigerHead /> <h2 className='ml-3'>GYMFIT</h2> </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;