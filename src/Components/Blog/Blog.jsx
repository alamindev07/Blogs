import React from 'react';
import {FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookMark, handleReaidngCoungt}) => {
    
    const {title, author, cover, posted_date, author_img, reading_time}= blog;
    return (

        <div className="border rounded-lg p-10 bg-white shadow-md">
  <h1 className="text-xl font-semibold mb-4">{title}</h1>
  <img className="w-full rounded-md" src={cover} alt="" />

  <div className="flex justify-between items-center mt-4">
    <div>
      <h2 className="font-medium">{author}</h2>
      <p className="text-sm text-gray-500">{posted_date}</p>
      <p className="font-bold">Reading Time: {reading_time}</p>
    </div>
    <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
  </div>

  <div className="flex justify-between mb-4 gap-4 mt-6">
    <button className="bg-purple-500 p-2 rounded-md text-white" onClick={()=> handleReaidngCoungt(blog)}>Mark As Read</button>
    <button className='flex border-2 rounded-lg p-2 justify-center  bg-red-500' onClick={() => handleBookMark(blog)}>
      Add To BookMark <FaRegBookmark size={30} />
    </button>
  </div>
</div>

    );
};

export default Blog;