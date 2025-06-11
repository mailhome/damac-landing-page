import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { TbHandFingerRight } from 'react-icons/tb'
import { Button } from '../ui/button'



const images =  [
  {
    imageSrc: "/hero-31.jpg",
    alt: "Images 1",
  },
  
  {
    imageSrc: "/hero-22.jpg",
    alt: "Images 2",
  },

  {
    imageSrc: "/image.avif",
    alt: "Images 3",
  },
]

export default function AboutUs() {
  return (
    <div className='w-full h-auto'> 
        <div className="h-full w-full py-5 md:py-16 xl:py-24 width-container">
                <div className="grid grid-cols-1 text-black lg:grid-cols-12 gap-10 w-full ">
                  <div className="w-full col-span-4 flex items-start justify-start gap-2 flex-col">
                    <h1 className='capitalize text-left md:w-full md:mx-0 text-sm sm:text-md md:text-left md:text-lg lg:text-2xl lg:w-10/12 xl:w-10/12 xl:text-3xl 2xl:text-2xl '>
                        A legacy of excellence in luxury real estate
                      </h1>
                       <Link href="#" className='md:w-auto w-full'>
                          <Button
                          className="rounded-md bg-[#A46C3E]  border flex justify-start items-center text-white hover:bg-transparent/25 gap-3 md:text-md lg:text-2xl lg:px-16 lg:py-2 xl:py-4 xl:text-xl xl:h-8">
                            <TbHandFingerRight className="size-4 md:size-6 xl:size-6" />
                            <span className="">
                              Know Now
                            </span>
                          </Button>
                      </Link>
                  </div>
                  <div className="w-full col-span-8 flex items-start flex-col justify-start gap-2">
                    <p className='text-[11px] sm:text-sm lg:text-lg xl:text-sm 2xl:w-10/12 '>
                        DAMAC Properties, a part of the prestigious DAMAC Group, has been redefining the luxury real estate landscape in the Middle East since 1982, offering a portfolio of iconic residential, commercial, and leisure properties across the region and beyond.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit repudiandae exercitationem optio officiis dolore officia in dignissimos. Distinctio ea neque, sapiente dolores ipsa perspiciatis quae esse inventore expedita natus.
                      </p>
                      <p className='text-[11px] sm:text-sm lg:text-lg xl:text-sm 2xl:w-10/12'>
                        Lorem  ipsum dolor sit, amet consectetur adipisicing elit. Ut in molestias repudiandae eum commodi quia ea, alias quo. Accusantium earum eligendi aspernatur maxime tenetur consequatur reiciendis magnam eveniet. Officiis, itaque.
                      </p>
                  </div>
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 w-full gap-10 mt-10">
                    {images.map((image) => (
                      <ImageItem 
                      key={image.alt} 
                      imageSrc={image.imageSrc} 
                      alt={image.alt} />
                    ))}
                  </div>
        </div>
    </div>
  )
}


interface ImageItemProps {
  alt: string;
  imageSrc: string;
}

const ImageItem = ({
  alt,
  imageSrc
}: ImageItemProps) =>  {
  return (
    <div className='w-full xl:h-[400px] relative rounded-md'>
      <Image 
      src={imageSrc} 
      alt= {alt} 
      fill
      className='absolute rounded-md'
       />
    </div>
  )
}



 