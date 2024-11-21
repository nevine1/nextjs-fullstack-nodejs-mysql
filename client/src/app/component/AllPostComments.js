
"use client"
import { useState, useEffect } from 'react'
import axios from 'axios';
import CreatePostComment from './CreatePostComment';
import { comment } from 'postcss';
import {useParams } from 'next/navigation'
const AllPostComments   = () => {
    const {id } = useParams();
    const [comments, setComments ] = useState([]);
    const [newComment, setNewComment]  = useState('');

    useEffect(() => {

        const fetchComments = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/comments/${id}`);
                setComments(res.data.reverse()); 
            } catch (error) {
                console.error('Could not fetch comments:', error);
            }
        };

        fetchComments();
    }, [id]);

    

  return (
       <div className="flex flex-col  px-8 py-6 justify-center bg-gray-200 rounded ">

        <h2 className="text-[19px] mb-4 p-2">Total comments: {comments.length}</h2>
        
            {
                comments.map((comment) => (
                    <div key={comment.id} 
                        className="flex flex-col bg-white rounded-md shadow-md p-6 mb-4"
                    >
                        <h1>{comment.commentBody}</h1>
                    </div>
                ))
            }
           
        
            <CreatePostComment comments={comments} setComments={setComments}/>
        </div>
  )
}

export default AllPostComments  