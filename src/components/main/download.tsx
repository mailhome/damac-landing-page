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
          <div className="grid grid-cols-1 lg:grid-cols-2 py-10 width-container">
            <div className="flex lg:items-start lg:justify-start justify-center items-center gap-6 w-full text-white flex-col">
              <div className="lg:h-40 lg:w-40 w-48 h-48 relative">
                <Image 
                src="/logo-here.svg"
                alt='Logo' 
                fill 
                className='absolute' />
              </div>
              <h1 className='uppercase text-left text-3xl sm:text-3xl lg:text-left md:text-4xl lg:text-4xl lg:w-10/12 xl:w-10/12 xl:text-2xl 2xl:text-4xl font-semibold'>
                Effortless Elegance
              </h1>
              <p className='2xl:w-10/12 w-full xl:text-2xl text-lg md:text-xl lg:text-xl lg:text-left text-center col-span-8 lg:leading-[2.5rem]'>
                Manage your DAMAC property effortlessly with the DAMAC Living app. From service requests to secure payments and instant updates, everything you need is just a tap away for a smooth, convenient experience.
              </p>
              <div className="flex items-center flex-row lg:justify-start justify-center gap-10 w-[300px]">
                {items.map((item) => (
                  <Link 
                  key={item.href} 
                  href={item.href} 
                  className='w-full'>
                  <div className="2xl:w-[250px] w-60 h-20 relative">
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
            <div className="w-full hidden mx-auto h-full relative lg:flex items-center justify-center">
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
