'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { OptionField } from './StoryType'

export function ImageStyle({ userSelection }: any) {
  const OptionsList = [
    {
      label: 'Cartoon',
      imageUrl: '/story.png',
      isFree: true
    },
    {
      label: 'Paper Cut',
      imageUrl: '/bed.png',
      isFree: true
    },
    {
      label: 'Water Color',
      imageUrl: '/educational.png',
      isFree: true
    },
    {
      label: 'Pixel Style',
      imageUrl: '/educational.png',
      isFree: true
    }
  ]

  const [selectedOption, setSelectedOption] = useState<string>()

  const onUserSelected = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: 'imageStyle'
    })
  }

  return (
    <div className='bg-azulnocturno p-6 rounded-3xl shadow-lg text-gray-100'>
      <label className='font-bold text-2xl md:text-3xl text-hallowennorange'>4. Image Style</label>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {OptionsList.map((item, index) => (
          <div
            key={index}
            onClick={() => onUserSelected(item)}
            className={`relative rounded-3xl p-2 transition-transform transform hover:scale-105 cursor-pointer ${selectedOption === item.label ? 'grayscale-0 border-4 border-hallowennorange' : 'grayscale'} `}>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={200}
              className='object-cover w-full h-[120px] rounded-3xl hover:shadow-custom'
            />
            <h2 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-white text-center w-full bg-black bg-opacity-50 py-1 px-2 rounded-xl overflow-hidden text-ellipsis whitespace-nowrap'>
              {item.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}
