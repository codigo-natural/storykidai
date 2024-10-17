import { Button } from '@nextui-org/button'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export type StoryItemType = {
  id: number
  storyType: string
  ageGroup: string
  coverImage: string
  imageStyle: string
  userEmail: string
  userImage: string
  userName: string
  output: [] | any
  storyId: string
  storySubject: string
}

export const StoryItemCard = ({ story }: { story: StoryItemType }) => {
  console.log('story: ', story)
  return (
    <Link href={'/view-story/' + story?.storyId}>
      <Card
        isFooterBlurred
        className='w-full h-[300px] col-span-12 sm:col-span-5 hover:scale-105 transition-all cursor-pointer'
      >
        <Image
          removeWrapper
          alt='Card example background'
          className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
          src='/bat.png'
          width={500}
          height={500}
        />
        <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
          <div>
            <p className='text-azulnocturno text-xl'>
              {story?.output?.story_name}
            </p>
          </div>
          <Button
            className='text-tiny bg-hallowennorange'
            radius='full'
            size='sm'
          >
            Read Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
