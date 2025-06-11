import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const items = [
  {
    imageSrc: "/play-icon.avif",
    href: "/android"
  },

  {
    imageSrc: "/apple-icon.avif",
    href: "/apple"
  }
]

export default function Download() {
  return (
        <div className="bg-[rgb(4,23,16)] h-auto w-full opacity-95 my-2">
          <div className="flex items-center justify-center flex-col min-h-full w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 width-container">
            <div className="flex items-start justify-start gap-6 w-full text-white flex-col">
              <div className="h-40 w-40 relative">
                <Image 
                src="/logo-here.svg"
                alt='Logo' 
                fill 
                className='absolute' />
              </div>
              <h1 className='uppercase text-left md:w-full md:mx-0 text-sm sm:text-md md:text-left md:text-lg lg:text-2xl lg:w-10/12 xl:w-10/12 xl:text-2xl 2xl:text-4xl font-semibold'>
                Effortless Elegance
              </h1>
              <p className='w-10/12 xl:text-2xl text-[10px]  text-left col-span-8 lg:leading-[2.5rem]'>
                Manage your DAMAC property effortlessly with the DAMAC Living app. From service requests to secure payments and instant updates, everything you need is just a tap away for a smooth, convenient experience.
              </p>
              <div className="flex items-center justify-start gap-10 w-[300px]">
                {items.map((item) => (
                  <Link 
                  key={item.href} 
                  href={item.href} 
                  className='w-full'>
                  <div className="w-[250px] h-20 relative">
                        <Image 
                        src={item.imageSrc} 
                        alt={item.imageSrc} 
                        fill 
                        className='absolute'
                         />
                         </div>
            
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full mx-auto h-full relative flex ite justify-center">
                <Image 
                src="/logo-1.png"
                alt='mobile logo' 
                fill 
                className='absolute object-contain object-center' />
              </div>
          </div>
          </div>
        </div>
    
  )
}
