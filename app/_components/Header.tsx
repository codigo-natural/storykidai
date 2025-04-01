'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from './Button'

export const Header = () => {
  const { user, isSignedIn } = useUser()
  const router = useRouter()
  const menuList = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Create Story',
      path: '/create-story',
    },
    {
      name: 'Explore Stories',
      path: '/explore',
    },
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='bg-white shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex items-center'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none'
            >
              {isMenuOpen ? '✖' : '☰'}
            </button>
            <Link href='/' className='text-2xl font-bold ml-3'>
              StoryKid AI
            </Link>
          </div>
          <div className='hidden sm:flex space-x-6'>
            {menuList.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className='text-lg font-medium hover:underline'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex items-center space-x-4'>
            <Button onClick={() => router.push('/dashboard')}>
              {isSignedIn ? 'Dashboard' : 'Get Started'}
            </Button>
            <UserButton />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='sm:hidden bg-white shadow-md py-2'>
          {menuList.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className='block px-4 py-2 text-lg font-medium hover:bg-gray-100'
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
