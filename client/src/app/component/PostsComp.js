"use client";
import { useState, useEffect } from 'react'
import axios from "axios";
import CreatePost from './CreatePost';
const PostsComp = () =>{

    const [posts, setPosts ] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:3001/posts").then((res) =>{
          console.log(res.data);
          setPosts(res.data);
        });
       
      }, [])
    console.log(posts)
    return(
        <div className="flex flex-col  gab-3">
         
            {
            posts.map((post) => (
                <div key={post.id}>
                <h1>{post.title}</h1>
                </div>
            )
            
            )
            }
      </div>
    )
}

export default PostsComp; 