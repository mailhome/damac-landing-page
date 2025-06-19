import Image from 'next/image'
import React from 'react'

export default function Logo () {
  return (
    <div className='text-white relative h-12 w-60 sm:h-12 sm:w-60 md:h-20 md:w-[320px] lg:w-[360px] lg:h-20 xl:w-[250px] xl:h-20'>
      <Image 
      fill 
      alt='Logo' 
      className='absolute' 
      src="/logo-white.png" />
    </div>
  )
}
