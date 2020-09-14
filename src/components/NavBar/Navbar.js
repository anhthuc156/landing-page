import React from 'react';
import Logo from '../Logo/Logo';
import './Navbar.css';

const NavBar = () => {
    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar w-nav">
            <div className="container-2 w-container">
                <div className="small-nav-menu">
                    <a href="#" className="small-nav-item">Shop</a>
                    <a href="#" className="small-nav-item">Sign in</a>
                </div>
                <Logo />
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <a href="#" className="nav-item w-nav-link">Model S</a>
                    <a href="#" className="nav-item w-nav-link">Model 3</a>
                    <a href="#" className="nav-item w-nav-link">Model X</a>
                    <a href="#" className="nav-item w-nav-link">Model Y</a>
                    <a href="#" className="nav-item w-nav-link">SOLAR ROOF</a>
                    <a href="#" className="nav-item w-nav-link">SOLAR PANELS</a>
                </nav>
            </div>
        </div> 
    )
}

export default NavBar