import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header-contain'>
          <Image  src={assets.logo} alt=""/>
          <button>Get started <Image src={assets.arrow} alt="" /></button>

        </div>
        <div className='header-conatainer'>
          <h1 className='header-haeding'>Latest Blog</h1>
          <p className='header-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium repudiandae maxime, fugiat, itaque error libero consequuntur voluptatem ad odio cum sint! Provident dolor illum hic, in perspiciatis aliquam dignissimos! Iste.</p>
          <form className='header-form'>
            <input className='header-input' type="email" placeholder='enter your email' />
            <button className='header-btn'>Subscribe</button>
          </form>

        </div>
    </div>
  )
}

export default Header