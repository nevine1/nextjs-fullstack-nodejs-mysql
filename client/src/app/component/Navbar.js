import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-blue-600 h-[70px] m-0 p-0">
        <ul className="flex flex-row text-white justify-center items-center gap-10 mt-0">
            <Link href="/">Home</Link>
            <Link href="/posts/create-post">Create Post</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
