import React, { useEffect, useState } from 'react'
import axios from "axios"; 

import './news.scss'
import Post from '../../Components/Post/Post'; 
 


function News() {
  const [post, setPosts] = useState([]);

  useEffect(()=>{
    const getPosts = async()=>{
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);    
    }
     
    getPosts()

  }, []);

  const body = post.body;
  console.log(body); 

  return (
    <section className='news'>
      <div className="container">
       <Post post={post}/> 
      </div>
    </section>
  )
}

export default News; 