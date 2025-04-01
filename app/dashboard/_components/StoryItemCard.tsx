import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from './Card'
import { CardFooter } from './CardFooter'
import { Button } from '@/app/_components/Button'

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
  return (
    <Link href={'/view-story/' + story?.storyId}>
      <Card>
        <Image
          alt='Story cover image'
          className='w-full h-full object-cover'
          src={story.coverImage || '/bat.png'}
          width={500}
          height={500}
        />
        <CardFooter>
          <p className='text-azulnocturno text-xl font-semibold'>
            {story?.output?.story_name}
          </p>
          <div className='flex items-center gap-4'>
            <Button>Read</Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
