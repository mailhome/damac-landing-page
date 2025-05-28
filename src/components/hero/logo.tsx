import Image from 'next/image'
import React from 'react'

export default function Logo () {
  return (
    <div className='text-white relative h-10 w-48 md:h-16 md:w-60 lg:w-[360px] lg:h-20 xl:w-[450px] xl:h-24'>
      <Image 
      fill 
      alt='Logo' 
      className='absolute' 
      src="/logo-white.png" />
    </div>
  )
}
