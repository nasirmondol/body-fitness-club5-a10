import React from 'react';
import './Header.css'
import CustomLink from '../../CustomLinks/CustomLinks';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header text-xl text-center justify-center ms-5 bg-black text-white '>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='blog'>Blog</Link>
            <Link className='link' to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </nav>
    );
};

export default Header;