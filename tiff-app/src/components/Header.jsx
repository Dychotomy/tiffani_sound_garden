import React from "react";
// import clouds from '../art_assets/IMG_7406.jpeg'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className='title'>
                Tiffani Allen
            </h1>
            <div className='nav'>Home About Music</div>
            {/* <img className='header-background' src={clouds} alt='clouds' /> */}
        </div>
    )
}

export default Header;