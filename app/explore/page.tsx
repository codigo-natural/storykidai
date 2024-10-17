'use client'

import { db } from '@/config/db'
import { StoryData } from '@/config/schema'
import { desc } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
  StoryItemCard,
  StoryItemType,
} from '../dashboard/_components/StoryItemCard'
import { Button } from '@nextui-org/button'

export default function ExplorMore() {
  const [offset, setOffset] = useState(0)
  const [storyList, setStoryList] = useState<StoryItemType[]>()

  useEffect(() => {
    GetAllStories(0)
  }, [])
  const GetAllStories = async (offset: number) => {
    setOffset(offset)
    const result: any = await db
      .select()
      .from(StoryData)
      .orderBy(desc(StoryData.id))
      .limit(8)
      .offset(offset)
    setStoryList(result)
    setStoryList((prev) => [...(prev ?? []), ...result])
  }

  return (
    <div className='min-h-screen p-10 md:px-20 lg:px40'>
      <h2 className='font-bold text-4xl text-halloweenPurple text-center mb-4'>
        Explorar mas historias
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {storyList &&
          storyList.map(
            (item: StoryItemType, index: number) =>
              StoryItemCard && <StoryItemCard key={index} story={item} />
          )}
      </div>
      <div className='text-center mt-10'>
        <Button className='' onClick={() => GetAllStories(offset + 5)}>
          Cargar mas
        </Button>
      </div>
    </div>
  )
}
