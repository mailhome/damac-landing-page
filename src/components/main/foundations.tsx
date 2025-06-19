"use client"

import Image from 'next/image'
import { ContentProps } from './content-props'


const items = [
  {
    srcImg: "/community-icon.svg",
    desc: "One Million Arab Coders Initiative",
    alt: "homes delivered"
  },

  {
    srcImg: "/11.svg",
    desc: "Community Development Programs",
    alt: "In planning and progress"
  },

  {
    srcImg: "/sustain-icon.svg",
    desc: "Sustainability",
    alt: "awards received"
  }, 

  {
    srcImg: "/13.svg",
    desc: "Educational Support Initiatives",
    alt: "countries"
  }
]

export default function Foundations () {
  return (
    <div className="bg-[#F2EEE9] w-full py-5 h-auto pb-20">
      <ContentProps 
      title='EMPOWERING COMMUNITIES, BUILDING FUTURES?' 
      label = "The Hussain Sajwani DAMAC Foundation is a testament to our commitment to creating a positive impact. From supporting the One Million Arab Coders Initiative to our sustainability efforts, we believe in building a better tomorrow. Discover how we’re making a difference, one initiative at a time." 
      content={<ContentItems />}
      />
     </div>
  )
}

function ContentItems () {
  return (
    <div className='w-full h-full'>
        <div className="w-full h-auto mx-auto mt-2 grid grid-cols-1 lg:grid-cols-2 xl:gap-x-20 lg:gap-6 gap-y-20">
          <div className="h-[600px] xl:h-[600px] w-full relative md:order-2">/
            <Image 
            src="/hero-31.jpg" 
            alt='Image' 
            fill 
            className='absolute rounded-md' />
          </div> 
          <div className="grid grid-cols-2 w-full h-full gap-8 md:gap-10 lg:gap-6" >
            {items.map((item) => (
              <ContentWhyDemac 
              key = {item.alt}  
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
  imgSrc: string;
  desc: string;
  alt: string;
}

const ContentWhyDemac = ({
  imgSrc,
  desc, 
  alt
}: ContentWhyDemacProps) => {
  return (
    <div className='w-full h-[30vh] lg:h-full  bg-white shadow-md flex flex-col items-center justify-center rounded-md gap-0 xl:gap-4 lg:gap-4 py-10 lg:py-8'>
        {/* TODO: Place a video here */}
          <div className="flex items-center relative xl:h-20 lg:h-20 2xl:w-80 justify-center">
            <Image 
            src={imgSrc} 
            alt={alt} 
            height={600}
            width={110}
             />
          </div>
          <p className="text-center w-8/12 mx-auto text-md md:text-lg xl:text-xl text-[#041710]">{desc}</p>
    </div>
  )
}









