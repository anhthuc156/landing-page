import React from 'react';
import './Logo.css';
import logo from '../../images/tesla-white.png'

const Logo = () => {
    return (
        <a href="#" className="logo w-nav-brand">
            <img src={logo} alt="Tesla Logo" sizes="7vw" className="image" />
        </a>
    )
}

export default Logo