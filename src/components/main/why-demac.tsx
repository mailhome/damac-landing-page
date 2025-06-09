"use client"

import Image from 'next/image'
import { ContentProps } from './content-props'




const items = [
  {
    srcImg: "/10.svg",
    label: "4800+",
    desc: "Homes delivered*",
    alt: "homes delivered"
  },

  {
    srcImg: "/11.svg",
    label: "50,100+",
    desc: "In planning and progress*",
    alt: "In planning and progress"
  },

  {
    srcImg: "/12.svg",
    label: "100+",
    desc: "Awards received",
    alt: "awards received"
  }, 

  {
    srcImg: "/13.svg",
    label: "7",
    desc: "Countries",
    alt: "countries"
  }
]

export default function WhyDemac() {
  return (
    <div className="bg-[#faf5ef] w-full py-5 h-auto xl:pt xl:pb-40 ">
      <ContentProps 
      title='Why Damac Properties?' 
      label = "Renowned for iconic developments and exceptional craftsmanship, DAMAC Properties blends elegance, innovation, and world-class amenities. With a presence in the UAE, Saudi Arabia, Qatar, and beyond, its portfolio of luxury residential, commercial, and leisure properties sets a global standard for excellence" 
      content={<ContentItems />}
      />
     </div>
  )
}

function ContentItems () {
  return (
    <div className='w-full h-full'>
        <div className="w-full h-[200px] xl:h-[500px]  mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-20">
          <div className="h-[200px] xl:h-[600px] w-full relative md:order-2">/
            <Image 
            src="/hero-6.jpg" 
            alt='Image' 
            fill 
            className='absolute rounded-md' />
          </div> 
          <div className="grid grid-cols-2 w-full h-full gap-8">
            {items.map((item) => (
              <ContentWhyDemac 
              key = {item.label} 
              label = {item.label} 
              imgSrc = {item.srcImg}
              alt = {item.alt} 
              desc = {item.desc} />
            ))}
          </div>
        </div>
    </div>
  )
}

interface ContentWhyDemacProps {
  label: string;
  imgSrc: string;
  desc: string;
  alt: string;
}

const ContentWhyDemac = ({
  label,
  imgSrc,
  desc, 
  alt
}: ContentWhyDemacProps) => {
  return (
    <div className='w-full h-full bg-white shadow-md flex flex-col items-center justify-center rounded-md gap-0 xl:gap-2 py-4'>
        {/* TODO: Place a video here */}
          <div className="flex items-center relative xl:h-20 2xl:w-80 justify-center">
            <Image 
            src={imgSrc} 
            alt={alt} 
            height={500}
            width={100}
             />
          </div>
          <p className="text-[#041710] text-sm xl:text-2xl font-semibold">
            {label}
          </p>
          <p className="text-[8px] sm:text-[12px] xl:text-xl text-[#041710]">{desc}</p>
    </div>
  )
}









