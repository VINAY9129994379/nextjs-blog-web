"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import './BlogList.css';
import { blog_data } from '@/assets/assets';
import BlogItem from './BlogItem';

function BlogList() {
  const [menu, setMenu] = useState('All');

  return (
    <div className='blog-list'>
      <div className='blog-list-container'>
        <button
          onClick={() => setMenu('All')}
          className={menu === 'All' ? 'blog-list-btn active' : 'blog-list-btn'}
        >
          All
        </button>
        <button
          onClick={() => setMenu('Technology')}
          className={menu === 'Technology' ? 'blog-list-btn active' : 'blog-list-btn'}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu('Startup')}
          className={menu === 'Startup' ? 'blog-list-btn active' : 'blog-list-btn'}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu('Lifestyle')}
          className={menu === 'Lifestyle' ? 'blog-list-btn active' : 'blog-list-btn'}
        >
          Lifestyle
        </button>
      </div>

      <div className='blogs'>
        {blog_data
          .filter((item) => menu === 'All' || item.category === menu)
          .map((item, index) => (
            <BlogItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}

export default BlogList;
