'use client'
import { db } from '@/config/db'
import { StoryData } from '@/config/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { BookCoverPage } from '../_components/BookCoverPage'
import { StoryPages } from '../_components/StoryPages'
import { LastPage } from '../_components/LastPage'
import { SvgIcons } from '@/public/svg'

export default function ViewStoryPage({ params }: any) {
  const [story, setStory] = useState<any>()
  const [count, setCount] = useState(0)
  const bookRef = useRef<typeof HTMLFlipBook | null>(null) // Cambiar a 'typeof HTMLFlipBook'

  useEffect(() => {
    console.log(params.id)
    getStory()
    console.log('story: ', story)
  }, [])

  const getStory = async () => {
    const result = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData.storyId, params.id))

    console.log('output:', result[0])
    console.log('result', story)
    setStory(result[0])
  }

  return (
    <div className='p-10 md:px-20 lg:px-40 flex flex-col'>
      <h2 className='font-bold text-4xl text-center p-10 bg-hallowennorange text-white'>
        {story?.output?.story_name}
      </h2>
      <div className='relative flex justify-center items-center'>
        {/*@ts-ignore */}
        <HTMLFlipBook
          width={500}
          height={600}
          showCover={true}
          className='mt-10'
          useMouseEvents={false}
          ref={bookRef}
        >
          {/*<BookCoverPage imageUrl={story?.coverImage ? story.coverImage : '/default-cover-image.jpg'} />*/}
          <div className=''>
            <BookCoverPage imageUrl={'/default-cover-image.webp'} />
          </div>
          {[...Array(story?.output?.chapters?.length)].map((item, index) => (
            <div key={index} className='bg-white p-10 border h-20'>
              <StoryPages storyChapter={story?.output.chapters[index]} />
            </div>
          ))}
          {/*<div>
            <LastPage />
          </div>
          */}
        </HTMLFlipBook>
        {count !== 0 && (
          <div className='absolute -left-5 top-[250px]'>
            <button
              onClick={() => {
                bookRef.current?.pageFlip().flipPrev()
                setCount(count - 1)
              }}
              className='cursor-pointer'
            >
              {SvgIcons.arrowLeft}
            </button>
          </div>
        )}
        {count !== story?.output.chapters.length - 1 && (
          <div className='absolute -right-5 top-[250px]'>
            <button
              onClick={() => {
                // Verificar si bookRef.current está definido antes de llamar a pageFlip
                if (bookRef.current) {
                  bookRef.current.pageFlip().flipNext()
                  setCount(count + 1)
                }
              }}
              className='cursor-pointer'
            >
              {SvgIcons.arrowRight}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
