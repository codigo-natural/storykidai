'use client'

import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

export const Header = () => {
  const { user, isSignedIn } = useUser()
  const MenuList = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Create Story',
      path: '/create-story'
    },
    {
      name: 'Explore Stories',
      path: '/explore'
    },
    {
      name: 'Contact Us',
      path: '/contact-us'
    }
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen} className='bg-halloweenbg text-hallowennorange'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href={'/'}>
            <h2
              className='font-bold text-2xl ml-3'
              style={{ textShadow: '10px 14px 39px rgba(255, 111, 0, 1)' }}
            >
              StoryKid AI
            </h2>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify='center' className='hidden sm:flex'>
        {MenuList.map(((item, index) => (
          <NavbarItem key={index} className='text-xl text-hallowennorange font-medium hover:underline mx-2'>
            <Link href={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        )))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <Link href={'/dashboard'}>
          <Button className='bg-hallowennorange'>
            {isSignedIn ? 'Dashboard' : 'Get Started'}
          </Button>
        </Link>
        <UserButton />
      </NavbarContent>
      <NavbarMenu>
        {MenuList.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.path}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

