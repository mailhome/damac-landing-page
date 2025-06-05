import React from 'react'
import WidthContainer from '../width-container'
import Link from 'next/link'
import { TbHandFingerRight } from 'react-icons/tb'
import { Button } from '../ui/button'

const items = [
  {
    label: "USD 354,000*",
    desc: "Starting price",
  },
  {
    label: "8-10%**",
    desc: "High rental returns",
  },
  {
    label: "1%*",
    desc: "Easy payment plan",
  },
  {
    label: "UP TO 100%**",
    desc: "Capital appreciation",
  },


]

export default function AboutUs() {
  return (
    <div className='bg-[url("/bg-about.avif")] bg-center bg-cover w-full h-auto'> 
        <div className="bg-[rgb(4,23,16)] opacity-90 h-full w-full py-10 md:py-16 xl:py-24">
            <WidthContainer>
                <div className="grid grid-cols-1 text-white md:grid-cols-2 gap-10 w-full">
                    <div className="flex justify-center flex-col items-center md:justify-start md:items-start gap-3 w-full md:gap-4 xl:gap-8">
                      <h1 className='uppercase text-left md:w-full md:mx-0 text-sm sm:text-md md:text-left md:text-lg lg:text-2xl lg:w-10/12 xl:w-10/12 xl:text-3xl 2xl:text-5xl 2xl:leading-[3.5rem]'>
                        A legacy of excellence in luxury real estate
                      </h1>
                      <p className='text-[11px] sm:text-sm lg:text-lg xl:text-2xl 2xl:w-10/12 2xl:leading-[2.8rem]'>
                        DAMAC Properties, a part of the prestigious DAMAC Group, has been redefining the luxury real estate landscape in the Middle East since 1982, offering a portfolio of iconic residential, commercial, and leisure properties across the region and beyond.
                      </p>
                      <Link href="#" className='md:w-auto w-full'>
                          <Button
                          variant="outline" 
                          className="rounded-md w-full text-white md:not-only:py-1.5 text-center border flex justify-center md:justify-center items-center bg-transparent hover:bg-transparent/25 uppercase text-md px-24 gap-3 md:text-md lg:text-2xl lg:px-16 lg:py-2 xl:py-4 xl:text-3xl xl:h-14 xl:w-6/12 ">
                            <TbHandFingerRight className="size-4 md:size-6 xl:size-10" />
                            <span className="">
                              Know Now
                            </span>
                          </Button>
                      </Link>
                    </div>

                    <div className='w-full'>
                      <div className="grid grid-cols-2 w-full gap-2 md:gap-4 xl:gap-8">
                        {items.map((item) => (
                          <AboutItem 
                          key={item.label} 
                          label={item.label} 
                          desc={item.desc} />
                        ))}
                        
                      </div>
                      <p className='text-[10px] xl:text-md'>*Terms and conditions apply. **Based on branded projects in the last two years.</p>
                    </div>
                </div> 
            </WidthContainer>
        </div>
    </div>
  )
}

interface AboutItemProps {
  label: string;
  desc: string;
}

const AboutItem = ({
  label,
  desc
}: AboutItemProps) => {
  return (
    <div className="w-full h-auto p-2 sm:py-4 lg:p-4  bg-[#022d1e] rounded-md">
      <div className="flex flex-col items-start justify-start gap-6 text-white md:gap-8 lg:gap-10 xl:gap-16 2xl:gap-24">
        <h1 className='text-md font-medium lg:text-2xl xl:text-3xl'>
          {label}
        </h1>
        <p className='text-xs lg:text-lg xl:text-2xl'>
          {desc}
        </p>
      </div>
    </div>
  )
}

 