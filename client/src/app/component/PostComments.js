"use client"
import { useState, useEffect } from 'react'
import axios from 'axios';

const PostComments = ({postId}) => {
  
    const [comments, setComments ] = useState([]);

    useEffect(() => {

        if (!postId) return; 

        const fetchComments = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/comments/${postId}`);
                console.log(res.data)
                setComments(res.data); 
            } catch (error) {
                console.error('Could not fetch comments:', error);
            }
        };

        fetchComments();
    }, [postId]);

    console.log(comments)
  return (
    <div>
        {
            comments.map((comment) => (
                <div key={comment.id}>
                    <h1>{comment.comment}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default PostComments