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
       

   

        /* const fetchComments = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/comments/${id}`);
                console.log(res.data)
                setComments(res.data); // Use the parsed data directly
            } catch (error) {
                console.error('Could not fetch comments:', error);
            }
        };
    
        fetchComments(); */

        if (id) {
            fetchPost();
           /*  fetchComments(); */
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
             <Link
                href={`/posts/${post.id}/comments/`}>To Check all Comments, click here </Link>
             <h2>Getting post comments for

                <PostComments postId={post.id}/>
             </h2>
             {/* <div>
                {comments.map((comment) =>(
                    <div key={comment.id}>
                        {comment.comment}
                    </div>
                ))}
             </div> */}
        </div>
    );
};

export default Post;
