"use client";
import { useState, useEffect } from 'react'
import axios from "axios";
import CreatePost from './CreatePost';
import SinglePost from './SinglePost';
import Link from 'next/link'
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
        <div className="grid gap-6 lg:grid-cols-4 grid-cols-3 mx-10 my-3">
            {
            posts.map((post) => (
                <div key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                    <SinglePost post={post}/>
                  </Link>
                </div>
            )
            
            )}
      
      </div>
    )
}

export default PostsComp; 