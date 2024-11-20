

"use client"

import AllPostComments from '@/app/component/AllPostComments'
import React from 'react'
import { useParams } from 'next/navigation'
const page = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Here are the comments for post is is: {id}</h2>
      
        <AllPostComments id={id}/>
    </div>
  )
}

export default page