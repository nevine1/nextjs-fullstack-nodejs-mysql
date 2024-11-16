"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/posts/byId/${id}`);
                setPost(response.data);
                
            } catch (err) {
                setError(err);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    if (error) {
        return <div>Error fetching post: {error.message}</div>;
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col gap-5 mx-12 my-6 px-20">
            <h1 className="text-[22px] ">Post Title: {post.title}</h1>
            <p>{post.postText}</p>
            <p>
              This post has written by:  
              <span className="text-blue-700"> {post.userName}</span>
             </p>
        </div>
    );
};

export default Post;
