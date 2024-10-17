import React from 'react'
import './BlogItem.css'
import Image from 'next/image'
import { assets} from '@/assets/assets'
import Link from 'next/link';

function BlogItem({image,title,description,category,id}) {
  return (
    <div className='blog-item'>
      <Link href={`/blogs/${id}`}> 
        <Image  className='blog-image' src={image} alt='' />
        </Link>
        <p>{category}</p>
        <div className='blog-item-details'>
            <h5 className='title'>{title}</h5>
            <p className='description'>{description}</p>
            <div className='header-read-more'>

            <Link href={`/blogs/${id}`}> 

                Read more <Image src={assets.arrow} alt=''/>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default BlogItem