import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookMark, handleReaidngCoungt}) => {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
         fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])

    // console.log(blogs)
    return (
        <div>
            <h1 className='font-bold text-2xl text-center'>Total Blogs: {blogs.length}</h1>
            <div className='grid grid-cols-2 gap-3 p-3'>
            {
                blogs.map(blog => <Blog handleBookMark={handleBookMark} handleReaidngCoungt={handleReaidngCoungt} key={blog.id} blog={blog} ></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;