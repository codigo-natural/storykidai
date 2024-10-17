import Image from 'next/image'
import React from 'react'

export const BookCoverPage = ({ imageURL }: any) => {
  return (
    <div>
      <Image src={'/default-cover-image.webp'} alt='cover' fill />
    </div>
  )
}
