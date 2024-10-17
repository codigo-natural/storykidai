import telaraña from '/telaraña.svg'

import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SvgIcons } from '@/public/svg'
import { Fredoka } from 'next/font/google'

const secondFont = Fredoka({ subsets: ['hebrew'], weight: '600' })

export const Hero = () => {
  return (
    <div className='relative px-10 md:px-28 lg:px-44 mt-10 h-dvh'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className='absolute right-24 z-20 rotate-45 animate-pulse shadow-custom'>
            {SvgIcons.ghost}
          </div>
          <div className='absolute right-16 top-24 z-20 rotate-6 animate-pulse shadow-custom'>
            {SvgIcons.bone}
          </div>
          <img
            className='absolute -left-2 -top-10 h-[25em] w-[25em] opacity-55'
            src='/telaraña.svg'
            alt=""
          />
          <h2 className='text-[70px] text-hallowennorange font-extrabold z-10 relative'
            style={{ textShadow: '10px 14px 39px rgba(255, 111, 0, 1)' }}>
            Craft Magical Stories for kids in Minutes
          </h2>
          <div className='absolute right-14 z-20 rotate-12 animate-pulse shadow-custom'>
            {SvgIcons.ghost}
          </div>
          <p className={`${secondFont.className} text-2xl text-halloweenPurple font-light text- relative z-10 mt-14`}>
            Create fun and personalized stories that bring your child's adventures to life and spark their passion for reading. It only takes a few seconds!
          </p>
          <Link href={'/create-story'}>
            <Button size='lg' className='mt-5 font-bold text-2xl p-8 z-10 relative bg-hallowennorange'>Create Story</Button>
          </Link>
        </div>
        <div>
          <Image src={'/wizard.png'} alt='hero' width={700} height={700} className="z-10 relative" />
        </div>
      </div>
    </div>
  )
}

