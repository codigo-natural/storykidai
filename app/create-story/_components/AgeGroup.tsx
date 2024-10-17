'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { OptionField } from './StoryType'

export function AgeGroup({ userSelection }: any) {
  const OptionsList = [
    {
      label: '0-2 Years',
      imageUrl: '/0-2-years.png',
      isFree: true
    },
    {
      label: '3-5 Years',
      imageUrl: '/2-4-years.png',
      isFree: true
    },
    {
      label: '5-8 Years',
      imageUrl: '/5-8-years.png',
      isFree: true
    }
  ]

  const [selectedOption, setSelectedOption] = useState<string>()

  const onUserSelected = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: 'ageGroup'
    })
  }

  return (
    <div className='bg-azulnocturno p-6 rounded-3xl shadow-lg text-gray-100'>
      <label className='font-bold text-2xl text-hallowennorange'>3. Age Group</label>
      <div className='grid grid-cols-3 gap-5 mt-3'>
        {OptionsList.map((item, index) => (
          <div
            key={index}
            onClick={() => onUserSelected(item)}
            className={`relative rounded-3xl p-2 transition-transform transform hover:scale-105 cursor-pointer ${selectedOption === item.label ? 'grayscale-0 border-4 border-hallowennorange' : 'grayscale'} `}>
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
