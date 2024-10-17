"use client"; // Mark this component as a Client Component

import { assets, blog_data } from '@/assets/assets';
import './page.css'
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Page({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    const blog = blog_data.find((item) => Number(params.id) === item.id);
    if (blog) {
      setData(blog);
      console.log(blog);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params]);

  return data ? (
    <>
      <div className="page-container">
        <div className="page-header">
          <Link href='/'>
          <Image className="header-logo" src={assets.logo} alt="Logo" />
          </Link>
          <button className="header-btn">
            Get started
            <Image src={assets.arrow} alt="Arrow" />
          </button>
        </div>
        <div className="page-author">
          <h1>{data.title}</h1>
          <Image
            className="page-author-profile"
            src={data.author_img}
            alt="Author profile"
          />
          <p className='author-name'>{data.author}</p>
        </div>
      </div>
      <div className="page-image-middle-details">
        <Image className="page-images" src={data.image} alt="Blog image" />
        <h1 className='intro'>Introduction</h1>
        <p>{data.description}</p>
        <h3 className='intro-heading'>Step 1:Self-Reflection and Goals</h3>
        <p className='intro-heading-para'>Before you can manage your lifestyle,you must have a clear..Before you can manage your lifestyle,you must have a clear..Before you can manage your</p>
        <p className='intro-heading-para'>Before you can manage your lifestyle,you must have a clear..Before you can manage your lifestyle,you must have a clear..Before you can manage your</p>
        <h3 className='intro-heading'>Step 1:Self-Reflection and Goals</h3>
        <p className='intro-heading-para'>Before you can manage your lifestyle,you must have a clear..Before you can manage your lifestyle,you must have a clear..Before you can manage your</p>
        <p className='intro-heading-para'>Before you can manage your lifestyle,you must have a clear..Before you can manage your lifestyle,you must have a clear..Before you can manage your</p>
        <h3 className='intro-heading'>Step 3:Conclusion</h3>
        <p className='intro-heading-para'>Before you can manage your lifestyle,you must have a clear..Before you can manage your lifestyle,you must have a clear..Before you can manage your</p>
        <p className='intro-heading-para'>Before you can manage your lifestyle,you must have a clear..Before you can manage your lifestyle,you must have a clear..Before you can manage your</p>
        <h3 className='intro-heading'>Managing your lifestyle is a journey that requires commitment</h3>
        <div className='page-bottom'>
          <p className='heading-conclusion'>Share this artical on social media..</p>
          <div className='flex-page-icons'>
            <Image src={assets.facebook_icon} alt=""/>
            <Image src={assets.twitter_icon} alt=""/>
            <Image src={assets.googleplus_icon} alt=""/>

          </div>

        </div>

      </div>
      <Footer/>
    </>
  ) : (
    <></>
  );
}

export default Page;
