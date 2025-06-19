import React from 'react'
import { ContentProps } from './content-props'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { TbHandFingerRight } from 'react-icons/tb'
import { Button } from '../ui/button'

export default function ExploreDemac () {
  return (
    <div className='py-10'>
      <ContentProps 
      title="EXPLORE OUR ICONIC PROPERTIES" 
      label='DAMAC Properties is renowned for crafting luxurious residential towers, world-class communities, and exclusive island resort residences. From elegant DAMAC apartments in Dubai to sophisticated urban sanctuaries, every property blends innovative design with exceptional amenities, delivering an unparalleled living experience.' 
      content={<ExploreContent />} />
    </div>
  )
}


const items = [
  {
    imgSrc: "/explore-1.jpg",
    label: "DAMAC Riverside Views",
    location: "Dubai Investment Park 2, UAE",
    price: "354,000*",
    href: "/login"
  },

  {
    imgSrc: "/explore-2.jpg",
    label: "DAMAC Islands",
    location: "Dubailand, Dubai, UAE",
    price: "678,000*",
    href: "/login"
  },

  {
    imgSrc: "/explore-3.jpg",
    label: "Violet",
    location: "DAMAC Hills, Dubai, UAE",
    price: "534,000*",
    href: "/login"
  },

  {
    imgSrc: "/explore-4.jpg",
    label: "DAMAC Lagoons - Mykonos",
    location: "Dubailand, Dubai, UAE",
    price: "790,000*",
    href: "/login"
  },

  {
    imgSrc: "/explore-5.jpg",
    label: "Elo",
    location: "DAMAC Hills 2, Dubai, UAE",
    price: "327,000*",
    href: "/login"
  },

  {
    imgSrc: "/explore-6.jpg",
    label: "Golf Greens",
    location: "DAMAC Hills, Dubai, UAE",
    price: "382,000*",
    href: "/login"
  },
  {
    imgSrc: "/explore-7.jpg",
    label: "Safa Gate",
    location: "Sheikh Zayed Road, Dubai, UAE",
    price: "541,000*",
    href: "/login"
  },
  
  {
    imgSrc: "/explore-8.jpg",
    label: "DAMAC Lagoon Views",
    location: "Dubailand, Dubai, UAE",
    price: "354,000*",
    href: "/login"
  },
]
const ExploreContent = () => {
  return (
    <div className='w-full md:mt-0 mt-10'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-10">
        {items.map((item) => (
          <ExploreContentItems 
          key={item.imgSrc} 
          imgSrc={item.imgSrc} 
          href={item.href} 
          label={item.label} 
          location={item.location} 
          price={item.price}  />
        ))}
      </div>
      <div className="w-full 2xl:w-11/12 mx-auto flex items-center justify-center gap-4 flex-col mt-6">
        <p className='text-center'>
          Explore DAMAC townhouses in Dubai, exquisite DAMAC villas, and off-plan projects that redefine modern luxury. With flexible DAMAC payment plans and prime locations, investing in DAMAC real estate has never been more accessible.
        </p>
        <Link href="#" className='md:w-auto justify-center flex items-center w-full'>
          <Button
          className="rounded-md bg-[#A46C3E]  border flex justify-start items-center text-white hover:bg-white  hover:text-[#A46C3E] gap-3 md:text-md lg:text-2xl lg:px-16 lg:py-2 xl:py-4 xl:text-lg h-10  xl:h-10">
            <TbHandFingerRight className="size-6 md:size-6 xl:size-6" />
            <span className="text-lg">
              Explore our products now
             </span>
            </Button>
        </Link>
      </div>

    </div>
  )
}

interface ExploreContentItemsProps {
  label: string;
  imgSrc: string;
  href: string;
  location: string;
  price: string;
}

const ExploreContentItems = ({
  label,
  imgSrc,
  href,
  location,
  price,
}: ExploreContentItemsProps) => {
  return (
    <div className='w-full h-auto'>
      <div className="w-full flex flex-col items-start justify-start h-auto">
        <div className="flex items-center justify-center w-full h-80 md:h-56 xl:h-48 relative ">
          <Image 
          src={imgSrc}
          alt={location}
          className='absolute rounded-t-2xl'  
          fill />
        </div>
        <div className="bg-neutral-200/50 w-full rounded-b-2xl">
          <div className="py-2 ">
            <div className="flex flex-col pl-4 items-start justify-start gap-2 py-2">
              <p className='text-2xl md:text-xl xl:text-xl font-semibold text-[#041710]'>{label}</p>
              <div className="flex items-center justify-start gap-1">
                <MapPin className='xl:size-4 size-4' />
                <p className='text-lg xl:text-base'>{location}</p>
              </div>
              <p className='text-[#A46C3E] text-lg xl:text-base font-semibold uppercase'>From {price}</p>
            </div>
            <Separator className='text-white'/>
            <div className="">
              <Link 
              href={href} 
              className='text-[#041710] pl-4 py-2 hover:bg-neutral-200 flex items-center justify-start gap-x-2'>
                <TbHandFingerRight className="size-6 md:size-6 xl:size-6" />
                <span className='text-xl md:text-xl font-semibold'>Explore</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






