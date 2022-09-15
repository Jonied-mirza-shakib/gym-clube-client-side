import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GiTigerHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    const menu = <>
        <li className='nav-li'><Link to='/'>HOME</Link></li>
        <li className='nav-li'><Link to='/about'>ABOUT US</Link></li>
        <li className='nav-li'><Link to='/trainer'>TRAINER</Link></li>
        <li className='nav-li'><Link to='/shop'>SHOP</Link></li>
        <li className='nav-li'><Link to='/blog'>BLOG</Link></li>
        <li className='nav-li'><Link to='/dashboard'>DASHBOARD</Link></li>
        <li className='nav-li'><Link to='/contact'>CONTACT US</Link></li>
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
                {
                    user?<a onClick={logout} className='btn btn-secondary login-btn'>LOGOUT</a>:<a className='btn btn-secondary login-btn'><Link to='/login'>LOGIN</Link></a>
                }
                 <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;