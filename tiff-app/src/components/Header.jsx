import React from "react";
// import clouds from '../art_assets/IMG_7406.jpeg'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 id='title-link' className='title'>
                Tiffani Allen
            </h1>
            <div className='nav'><a className='nav-link' href='#title-link'>Home</a> <a className='nav-link' href='#about-link'>About</a> <a className='nav-link' href='#music-link'>Music</a></div>
            {/* <img className='header-background' src={clouds} alt='clouds' /> */}
        </div>
    )
}

export default Header;