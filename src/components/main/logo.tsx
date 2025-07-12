import Image from 'next/image'
import React from 'react'

export default function Logo () {
  return (
    <div className='text-white relative h-24 w-80 sm:h-24 sm:w-80 md:h-24 md:w-[320px] lg:w-[360px] lg:h-20 xl:w-[250px] xl:h-20'>
      <Image 
      fill 
      alt='Logo' 
      className='absolute' 
      src="/logo-white.png" />
    </div>
  )
}
