import React from 'react'
import './Footer.css'
import { assets } from '@/assets/assets'
import Image from 'next/image'
function Footer() {
  return (
    <div className='footer'>
        <Image src={assets.logo_light} alt="" />
        <p>All right reserved. Copyright @blogger.com</p>   
        <div className="footer-icons">
            <Image className='footer-icon-image' src={assets.facebook_icon} alt="" />
            <Image className='footer-icon-image' src={assets.twitter_icon} alt="" />
            <Image className='footer-icon-image' src={assets.googleplus_icon} alt="" />

        </div>

    </div>
  )
}

export default Footer