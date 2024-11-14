"use client"

import Image from "next/image";
import { useEffect, useState} from 'react'
import PostsComp from "./component/PostsComp";

export default function Home() {
  

  
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
       <PostsComp/>
     
      
    </div>
  );
}
