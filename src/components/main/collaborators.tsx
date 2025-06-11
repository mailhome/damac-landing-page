import React from 'react'
import { ContentProps } from './content-props'
import Image from 'next/image'

const items  = [
    {
        imgSrc: "/explore-1.jpg",
        logo: "/roberto-cavalli.svg",
        label: "Cavalli Tower",
        desc: "Luxurious residences crafted with signature Cavalli style and opulence"
    },

    {
        imgSrc: "/image-2.avif",
        logo: "/deGrisogono-logo.svg",
        label: "Canal Height 1 & 2",
        desc: "Waterfront homes inspired by de GRISOGONO’s timeless elegance"
    },
    {
        imgSrc: "/image-3.avif",
        logo: "/versace-logo-en.svg",
        label: "DAMAC Tower Nine Elms",
        desc: "Designer living spaces showcasing Versace’s iconic style",
    },
    {
        imgSrc: "/image-6.avif",
        logo: "/rotana-logo-en-white.svg",
        label: "DAMAC Hills 2 Hotel",
        desc: "An exquisite three-star property managed by Edge by Rotana"
    },
    {
        imgSrc: "/image-5.avif",
        logo: "/paramount-logo-en.svg",
        label: "DAMAC Towers by Paramount",
        desc: "Hollywood-inspired luxury living with cinematic flair"
    },
    {
        imgSrc: "/image-8.avif",
        logo: "/trump-logo-en.svg",
        label: "DAMAC Hills Trump Golf Club",
        desc: "A world-class golf destination with Trump’s distinct signature"
    },
    {
        imgSrc: "/image-7.avif",
        logo: "/maldives.svg",
        label: "Mandarin Oriental Bolidhuffaru Reef Resort",
        desc: "A luxury retreat offering world-class hospitality."
    },
    {
        imgSrc: "/image-4.avif",
        logo: "/radisson-logo-en.svg",
        label: "Radisson at DAMAC Hills",
        desc: "Exceptional living spaces paired with Radisson’s unparalleled hospitality"
    },
]

export default function Collaborators() {
  return (
    <div className='w-full h-auto my-10'>
      <ContentProps 
      title='CURATED COLLABORATIONS'
      label="DAMAC brings new and exciting living concepts to life, with superior designs and details, by working with the finest designers and partnering with some of the most prestigious fashion and lifestyle brands."
      content={<CollaboratorsContent />} />
    </div>
  )
}



const CollaboratorsContent = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:gap-10'>
      {items.map((item, i) => (
        <div key={i} 
        className="w-full 2xl:h-[50vh] relative">
            <Image 
            src={item.imgSrc} 
            alt={item.label} 
            fill 
            className='absolute rounded-lg  object-cover' /> 
            <div className="h-full w-full bg-black/30 absolute">
                <div className="flex py-5 items-center justify-between w-full h-full flex-col">
                    <div className="flex items-center justify-center w-full">
                        <Image 
                        src={item.logo}
                        alt={item.label}
                        height={130}
                        width={130}
                        className='' />
                    </div>
                    <div className="flex items-center flex-col justify-center gap-2 w-11/12 mx-auto text-center text-lg">
                        <h2 className='font-semibold text-2xl text-white'>{item.label}</h2>
                        <p className='text-white w-10/12 mx-auto text-center text-lg'>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}



