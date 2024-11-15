"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (error) {
    return <div>Error fetching post: {error.message}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello id number: {id}</h1>
      {/* Display post details here */}
      <p>{post.title}</p>
      <p>{post.content}</p>
      {/* ...other post details */}
    </div>
  );
};

export default Page;