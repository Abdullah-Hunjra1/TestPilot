
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

const WorkspaceHeader = () => {
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="TestPilot logo"
        width={120}
        height={40}
        priority
      />

      {/* Empty center space */}

      {/* User Profile */}
      <UserButton />
    </header>
  )
}

export default WorkspaceHeader
