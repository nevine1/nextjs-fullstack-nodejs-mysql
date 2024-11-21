"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import PostComments from '../../component/PostComments'
import Link from 'next/link'
const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/posts/byId/${id}`);
                setPost(response.data);
                
            } catch (err) {
                setError(err);
            }
        };

        const fetchComments = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/comments/${id}`);
                console.log(res.data)
                setComments(res.data); // Use the parsed data directly
            } catch (error) {
                console.error('Could not fetch comments:', error);
            }
        };
    
        

        if (id) {
            fetchPost();
            fetchComments();
        }

    }, [id]);

    if (error) {
        return <div>Error fetching post: {error.message}</div>;
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-2 gap-4 mx-12 my-4 place-items-center">
            <div className="flex flex-col gap-3 w-[80%]">
                <div className=" flex flex-col bg-gray-200  p-10 rounded-md shadow-md gap-5">
                    <h1 className="text-[21px] ">
                        Post Title: 
                        <span className="text-blue-800 italic"> {post.title}</span>
                    </h1>
                    <p>
                        Post content: 
                        <span className="text-blue-800 italic"> {post.postText}</span>
                    </p>
                    <p> 
                        This post has written by:  
                    <span className="text-blue-800 italic"> {post.userName}</span>
                    </p>
                </div>

                <div className="flex flex-col bg-gray-200  p-10 rounded-md shadow-md gap-5">
                    <h1 className="font-semibold text-[20px] px-6">Comment for {post.title}</h1>

                    <div>
                        {comments.slice(0,2).map((comment) =>(
                            <div key={comment.id}
                                className="bg-white px-6 py-3 mb-5 rounded-sm"
                            >
                                {comment.commentBody}
                            </div>
                        ))}
                    </div>
                    <Link href={`/posts/${post.id}/comments/`}>All Comments {comments.length}</Link>
                </div>
            </div>
            
            <div className="flex flex-col gap-3 w-[80%] bg-gray-200">
                <h1>Add Comment</h1>
            </div>
             
        </div>
    );
};

export default Post;
