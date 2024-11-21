"use client"
import { useState } from 'react'
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';

const CreatePostComment = ({comments, setComments}) => {

    const {id }= useParams();
    
    const router = useRouter();
    const [newComment, setNewComment]  = useState('');
    
    const addComment = (e) => {
        if(newComment){

            axios.post(`http://localhost:3001/comments/`,
             { commentBody: newComment , postId:id })
            .then((res) =>{
                console.log("data is here i is", res.data)
                const newCommentAdded = { commentBody: newComment }
                setComments([...comments, newCommentAdded]) // to can see the new comment added instead refresh to page to see new comment
                setNewComment("")
            }
            
            );
            
        }else{
            return <span className="text-red-600">This field is required</span>
        }
        
            
        
    };
    
    
  return (
    <div className="">
       <p className="text-[20px] ">Add Comment</p>
       <div className="flex flex-col gap-4 items-center justify-center border-zinc-700 
                    bg-gray-200 px-9 py-6 rounded-md mb-4"
                >
            
                <input
                    name="commentBody"
                    className="px-3 py-2  mb-2  bg-white rounded-sm w-full"
                    placeholder='post Text'
                    value={newComment}
                    onChange={(e) =>setNewComment(e.target.value)}
                    />
                <button
                    className="py-2 px-4 bg-blue-600 rounded-md text-white text-[16px]"
                    onClick={addComment}
                    >Add Comment</button>
            </div>
    </div>
  )
}

export default CreatePostComment;
