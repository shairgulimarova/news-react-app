import React from 'react'
import { Link } from 'react-router-dom';

function Post({post}) {
  return (

         <ol>
        {
      post.map((item)=>(
        <li key={item.id}>
          <h3><Link to='/content' className='news-link'> {item.title} </Link></h3>
          </li>          
      ))
    }      
        </ol>
    
  )
}

export default Post