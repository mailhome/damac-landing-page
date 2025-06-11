import Image from 'next/image'
import React from 'react'


const items = [
    {
        imgSrc: "/image-1.avif",
        label: "Higher Rental Yields",
        desc: "Investors can earn rental yields of u[p to 8-10% annually, surpassing many global markets",
    },
    {
        imgSrc: "/image-2.avif",
        label: "Zero Taxes",
        desc: "The UAE offers zero income, capital gains, and wealth tax, maximising returns for investors.",
    },
    
    {
        imgSrc: "/image-3.avif",
        label: "Premium Healthcare",
        desc: "With strong healthcare investments, the city is ideal for supporting your health and wellbeing.",
    },
    {
        imgSrc: "/image-4.avif",
        label: "World Class Education",
        desc: "Dubai offers top-tier schools and universities with globally recognized curricula, ideal for families and expatriates.",
    },
    {
        imgSrc: "/image-5.avif",
        label: "Entertainment Hub",
        desc: "From iconic landmarks to theme parks and cultural events, Dubai is a world-class entertainment destination.",
    },
    {
        imgSrc: "/image-6.avif",
        label: "UAE Golden Visa",
        desc: "Real estate investments in Dubai can grant you long-term residency and exclusive Golden Visa benefits.",
    },
    {
        imgSrc: "/image-7.avif",
        label: "Communal Safety",
        desc: "The UAE ranks among the world's safest nations, with a well-developed, effective law enforcement system.",
    },
    {
        imgSrc: "/image-8.avif",
        label: "Touristic Appeal",
        desc: "Dubai’s iconic landmarks, luxury shopping, and vibrant culture make it a top global tourist destination.",
    },
]

export default function Investment () {
  return (
    <div className='w-full h-auto my-16'>
      <h1 className='text-5xl font-medium uppercase flex items-center justify-center-safe text-[#041710]'>
        Why Dubai?
      </h1>
      <div className="mt-10 w-full width-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5 w-full">
            {items.map((item) => (
                <div 
                key={item.label} 
                className="w-full flex items-sart justify-start gap-1 flex-col">
                    <div className="w-full h-48 relative">
                        <Image 
                        src={item.imgSrc}  
                        alt={item.label}
                        fill 
                        className='absolute rounded-t-2xl' />
                    </div>
                    <h1 className='text-xl font-medium text-black'>{item.label}</h1>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
