import React from 'react'

const SinglePost = ({post}) => {
    const {title, postText , userName } = post
  return (
    <div className="flex flex-col   mx-4 my-2 text-center
     bg-pink-200 border-gray-900 rounded-md shadow-md">
      <h1 className="w-full bg-gray-500 text-white m-0 py-2 px-4 text-center ">{title}</h1>
      <div className="p-10">
        <p>{postText}</p>
      </div>
      <h1 className="w-full bg-gray-500 text-white m-0 py-2 px-4 text-center">{userName}</h1>
      

      
    </div>
  )
}

export default SinglePost
