

"use client"

import AllPostComments from '@/app/component/AllPostComments'
import React from 'react'
import { useParams } from 'next/navigation'
const page = () => {
  /* const { id } = useParams(); */
  return (
    <div className="flex flex-col justify-center items-center mx-auto my-4  bg-white w-[100%]">
        <AllPostComments />
    </div>
  )
}

export default page