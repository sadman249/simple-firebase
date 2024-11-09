import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='space-x-5'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    );
};

export default Header;