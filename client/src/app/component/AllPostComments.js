 


"use client"
import { useState, useEffect } from 'react'
import axios from 'axios';

const AllPostComments   = ({id}) => {
  console.log(id)
    const [comments, setComments ] = useState([]);

    useEffect(() => {

        if (id) return; 

        const fetchComments = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/comments/${id}`);
                console.log(res.data)
                setComments(res.data); 
            } catch (error) {
                console.error('Could not fetch comments:', error);
            }
        };

        fetchComments();
    }, [id]);

    console.log(comments)

    console.log(id)
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

export default AllPostComments  