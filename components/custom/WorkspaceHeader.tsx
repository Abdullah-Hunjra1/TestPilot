import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const WorkspaceHeader = () => {
  return (
    <div className='flex w-full justify-between p-4'>
        {/* Logo */}
        <Image src={"/logo.png"} alt="logo" width={120} height={120} />

        {/* Menu Items */}
        <ul className='flex gap-8 text-xl'>
            <li className=' hover:text-blue-600 cursor-pointer'>Workspace</li>
            <li className=' hover:text-blue-600 cursor-pointer'>Pricing</li>
            <li className=' hover:text-blue-600 cursor-pointer'>Support</li>
        </ul>

        {/* User Button */}
        <UserButton />
    </div>
  )
}

export default WorkspaceHeader