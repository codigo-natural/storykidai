'use client'

import { db } from '@/config/db'
import { StoryData } from '@/config/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { StoryItemCard } from './StoryItemCard'
import { CustomLoader } from '@/app/create-story/_components/CustomLoader'

type StoryItemType = {
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

export const UserStory = () => {
  const { user } = useUser()
  const [storyList, setStoryList] = useState<StoryItemType[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    user && getUserStory()
  }, [user])

  const getUserStory = async () => {
    setLoading(true)
    const result: any = await db
      .select()
      .from(StoryData)
      .where(
        eq(StoryData.userEmail, user?.primaryEmailAddress?.emailAddress ?? '')
      )
    setStoryList(result)
    setLoading(false)
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10'>
        {storyList &&
          storyList.map(
            (item: StoryItemType, index: number) =>
              StoryItemCard && <StoryItemCard key={index} story={item} />
          )}
      </div>
      {loading && <CustomLoader isLoading={loading} />}
    </div>
  )
}
