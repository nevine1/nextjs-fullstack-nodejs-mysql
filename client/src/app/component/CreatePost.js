"use client"
import { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
const CreatePost = () => {
    const [title, setTitle ] = useState('');
    const [postText, setPostText] = useState('')
    const [userName, setUserName] = useState('');
    const  handleSubmit = (e, values) =>{
        e.preventDefault();
        if(title && postText && userName){
            console.log(title, postText, userName);
            axios.post("http://localhost:3001/posts", {
              title, postText, userName
            }).then((res) =>{
                console.log("it worked", res.data);
                setTitle(" ");
                setPostText("");
                setUserName("");
                
              }).catch((error) => console.error(error));
        }
    }
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-10">
       <h1 className="text-[20px] ">Create New Post</h1>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center border-zinc-700 
             bg-gray-200 px-9 py-6 rounded-md mb-4">
        <input
            name="title"
            type="text"
            className="px-3 py-2  mb-2  bg-white border-zinc-7000 rounded-sm"
            placeholder='Post title'
            value={title}
            onChange={(e) =>setTitle(e.target.value)}
        />
       
        <input
            name="postText"
            type="text"
            className="px-3 py-2  mb-2  bg-white rounded-sm"
            placeholder='Post title'
            value={postText}
            onChange={(e) =>setPostText(e.target.value)}
        />
        <input
            name="userName"
            type="text"
            className="px-3 py-2  mb-2  bg-white rounded-sm"
            placeholder='user name'
            value={userName}
            onChange={(e) =>setUserName(e.target.value)}
        />
        <button
            className="py-2 px-4 bg-blue-600 rounded-md text-white text-[17px]"
            type="submit">Send Post</button>
      </form>
    </div>
  )
}

export default CreatePost
