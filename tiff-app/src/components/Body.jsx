import React from 'react'
import portrait from '../art_assets/10-08-2019-13-16-14.jpeg'
import './body.css'

const Body = () => {
    return (
        <div className='body'>
            <img className='body-portrait' src={portrait} alt='Tiff' />
            <p className='body-about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus suscipit, praesentium, dignissimos dolore beatae quas sequi rem quidem, obcaecati reiciendis ipsum. Temporibus expedita totam omnis sit magnam earum consequuntur ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptates harum veritatis nostrum natus doloribus laborum quis error illo laudantium, earum est magni eius consequuntur voluptatem, aliquam iste cumque quisquam!</p>
        </div>
    )
}

export default Body