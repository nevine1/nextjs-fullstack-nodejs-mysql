"use client"

import Image from "next/image";
import { useEffect, useState} from 'react'
import PostsComp from "./component/PostsComp";
import Link from 'next/link'
export default function Home() { 
  

  
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Link href="/posts/create-post/">Create Post</Link>
       <PostsComp/>
     
      
    </div>
  );
}
