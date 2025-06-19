"use client"

import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { TbHandFingerRight } from 'react-icons/tb'
import { Button } from '../ui/button'
import { ContentProps } from './content-props'

const carousels = [
    { 
      
      imageSrc: "/image-1.avif",
      label: "Damac Islands",
      location: "Dubailand",
      desc1: "Dubai's first-ever island community",
      desc2: "Inspired by the world's most exotic tropical destinations",
      href: "/modal"
    },

    { 
      
      imageSrc: "/image-2.avif",
      label: "Damac Lagoons",
      location: "Dubailand",
      desc1: "Mediterranean living redefined",
      desc2: "A sprawling 45 million sq. ft. haven",
      href: "/modal",
    },
    
    { 
      
      imageSrc: "/image-3.avif",
      label: "Damac Hills",
      location: "Dubailand",
      desc1: "A self-sustained golf community",
      desc2: "Spanning 42 million sq. ft. of excellence",
      href: "/modal",
    },

    { 
      
      imageSrc: "/image-4.avif",
      label: "Damac Riversid",
      location: "Dubailand",
      desc1: "A self-sustained golf community",
      desc2: "Spanning 42 million sq. ft. of excellence",
      href: "/modal",
    },
    { 
      
      imageSrc: "/image-4.avif",
      label: "Damac Riverside",
      location: "Dubai Investment Park 2",
      desc1: "Dubai's premier riverside community",
      desc2: "Unparalleled waterfront excellence",
      href: "/modal",
    },
    { 
      
      imageSrc: "/image-5.avif",
      label: "Couture by Cavalli",
      location: "Dubai Waterfront",
      desc1: "Masterfully designed by Roberto Cavalli",
      desc2: "A bespoke collection of luxury apartments and penthouses",
      href: "/modal",
    },
    { 
      
      imageSrc: "/image-6.avif",
      label: "Damac Bay by Cavali",
      location: "Dubai Harbour",
      desc1: "Iconic designer residences by Cavalli",
      desc2: "Endless sea views and unmatched elegance",
      href: "/modal",
    },

    { 
      
      imageSrc: "/image-7.avif",
      label: "DAMAC Casa",
      location: "Al Sufouh",
      desc1: "Ultra-luxury living on the beachfront",
      desc2: "Residences with Palm Jumeirah views",
      href: "/modal",
    },

    { 
      
      imageSrc: "/image-9.avif",
      label: "Canal Heights",
      location: "Business Bay",
      desc1: "A de GRISOGONO-branded marvel",
      desc2: "A bold leap in architectural brillance",
      href: "/modal",
    },
]

export default function DemacGallery () {
  return (
    <div className='my-10 bg-[#F2EEE9] h-auto py-10 w-full'>
       <ContentProps 
       title='A WORLD OF LUXURY' 
       label='Discover the finest in DAMAC Properties Dubai from expansive master communities to exclusive designer branded residences through the DAMAC official website and experience extraordinary living, effortlessly within your reach.' 
       content={<DemacGalleryContent />}  />
        
    </div>
  )
}

const DemacGalleryContent = () => {
  
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurr((prevIndex) => (prevIndex + 1) % carousels.length);
    }, 3000);
    return () => clearInterval(intervalId)
  }, []);


  return (
    <div className="relative w-full overflow-hidden h-[80vh] xl:h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full ">
        {carousels.map((carousel, index) => (
          <div key={carousel.label} 
          className={`absolute top-0 left-0 w-full h-full ${index === curr ? "block" : "hidden"}`}>
            <div className=" h-[80vh] 2xl:h-[100vh] w-full relative">
              <Image 
              src={carousel.imageSrc} 
              alt={carousel.label} 
              fill 
              className='' />
             <div className="h-full w-full absolute flex flex-col items-start justify-end pb-20 text-white px-12"> 
              <div className="flex justify-between items-center w-full">
                <div className=" flex items-start justify-start flex-col gap-4">
                <div className="flex items-center lg:justify-center justify-between gap-20 md:gap-10 xl:gap-20">
                  <h2 className='text-3xl 2xl:text-3xl font-semibold'>{carousel.label}</h2>
                  <div className="flex items-center justify-end lg:justify-center gap-x-2">
                    <MapPin className='xl:size-8 text-white' />
                    <h2 className='text-2xl md:text-3xl 2xl:text-3xl font-semibold'>{carousel.location}</h2>
                  </div>
                </div>
                  <ul className="list-disc text-md md:text-lg lg:text-base">
                    <li className='text-md md:text-lg lg:text-base'>{carousel.desc1}</li>
                    <li className='text-md md:text-lg lg:text-base'>{carousel.desc2}</li>
                  </ul>
                </div>
                 <Link href={carousel.href} className="hidden lg:block text-3xl w-auto cursor-pointer">
                  <Button className='rounded-md bg-[#A46C3E] hover:bg-white hover:text-[#A46C3E]  border border-[#A46C3E] flex justify-start items-center text-white gap-3 md:text-md lg:text-2xl lg:px-16 lg:py-2 xl:py-4 xl:text-xl xl:h-10 hover:border-white'>
                    <TbHandFingerRight className="size-6 md:size-6 xl:size-6" />
                    <span className="text-2xl">
                      Know Now
                    </span>
                  </Button>
                </Link>
              </div>
          </div>
        </div>
      </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full gap-2">
          <div className="absolute -bottom-8 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {carousels.map((_, i) => (
            <div 
            key={i}
            onClick={() => setCurr(i)}
            className={`transition-all w-3 h-3 bg-neutral-200 rounded-full
              ${curr === i ? "bg-neutral-400" : ""}
            `}
            />
          ))}
        </div>
      </div>
        </div>
    </div>
  )
}










