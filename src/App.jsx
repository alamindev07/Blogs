
import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [bookMark, setBookMark]= useState([]);
  
  const [readingTime, setReadingTime] =useState(0);

  const handleBookMark =(blog)=>{
    console.log("bookmak button clicked",blog.id);
    const isAlreadyBookMarked = bookMark.find(b => b.id ===blog.id);
    if(!isAlreadyBookMarked){
      const newBookmark= [...bookMark, blog];
    setBookMark(newBookmark);
    }

    
  };

  const handleRemoveBookMark =(id)=>{
  const remainingBookmark = bookMark.filter( blog => blog.id !== id);
  setBookMark(remainingBookmark)
  }

  const handleReaidngCoungt =(blog)=>{
    const newRedingTime = readingTime + blog.reading_time;
    setReadingTime(newRedingTime);
    // console.log("blog:", newRedingTime)

  handleRemoveBookMark(blog.id)
  }

  return (
    <>
      <Navbar></Navbar>
     

    <div className="flex gap-6 mx-auto mt-6">
    <div className="left-side-container border w-[70%]">
    <Blogs handleReaidngCoungt={handleReaidngCoungt} handleBookMark={handleBookMark}></Blogs>
      </div>
      <div className="right-side-container border w-[30%]">
          <h3>Bookmark section</h3>
          <p className="text-xl font-bold text-lime-600">Reading Time Count: {readingTime}</p>
          <p className="text-xl font-bold">Total BookMarked:{bookMark.length}</p>
         <div className="p-2 mt-3 border-t-2">
          <p className="font-bold"> BookMark Added Here</p>
         {
            bookMark.map(blog => <div key={blog.id}>
              <p className="bg-red-600 mt-1 rounded-lg p-2 text-white">{blog.title}</p>
            </div>)
          }
         </div>

      </div>
    </div>
    </>
  );
}

export default App;
