'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export interface OptionField {
  label: string,
  imageUrl: string,
  isFree: boolean
}

export function StoryType({ userSelection }: any) {
  const OptionsList = [
    {
      label: 'Story Book',
      imageUrl: '/story.png',
      isFree: true
    },
    {
      label: 'Bed Book',
      imageUrl: '/bed.png',
      isFree: true
    },
    {
      label: 'Educational',
      imageUrl: '/educational.png',
      isFree: true
    }
  ]

  const [selectedOption, setSelectedOption] = useState<string>()

  const onUserSelected = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item.label,
      fieldName: 'storyType'
    })
  }

  return (
    <div className="bg-azulnocturno rounded-3xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition-shadow duration-300">
      <label className='font-bold text-2xl lg:text-3xl text-hallowennorange'>2. Story Type</label>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
        {OptionsList.map((item, index) => (
          <div
            key={index}
            className={`relative cursor-pointer p-4 border-2 transition-transform transform hover:scale-105 rounded-2xl ${selectedOption === item.label ? 'grayscale-0 border-4 border-hallowennorange' : 'grayscale'}`}
            onClick={() => onUserSelected(item)}
          >
            <h2 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-white text-center w-full bg-black bg-opacity-50 py-1 px-2 rounded-xl overflow-hidden text-ellipsis whitespace-nowrap'>
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={500}
              className='object-cover h-[260px] rounded-3xl hover:shadow-custom'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
