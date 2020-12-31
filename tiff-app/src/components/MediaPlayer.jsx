import React from 'react'
import clouds from '../art_assets/IMG_7406.jpeg'
import './mediaplayer.css'

const MediaPlayer = () => {
    return (
        <div className='music'>
            <img className='music-clouds' src={clouds} alt='clouds' />
            <p className='music-text'>Music pending!</p>
        </div>
    )
}

export default MediaPlayer