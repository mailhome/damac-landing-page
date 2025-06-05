import Image from 'next/image'
import React from 'react'

export default function Logo () {
  return (
    <div className='text-white relative h-10 w-36 md:h-16 md:w-60 lg:w-[360px] lg:h-20 xl:w-[300px] xl:h-20'>
      <Image 
      fill 
      alt='Logo' 
      className='absolute' 
      src="/logo-white.png" />
    </div>
  )
}
