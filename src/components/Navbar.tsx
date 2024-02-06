import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 border border-red-400'>
        <div>
            <Link href={"/"}>Logo</Link>
        </div>
        <div className='flex items-center gap-5'>
            <div>
                <Link href={"/"} >hello</Link>
            </div>
            <div> <UserButton afterSignOutUrl="/"></UserButton></div>
        </div>
    </div>
  )
}

export default Navbar