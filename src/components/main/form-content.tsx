import Image from 'next/image'
import React from 'react'
import FormContainer from './form-container'

const imageItem = [
    {
        imageSrc: "/crypto.svg",
        alt: "Bitcoin"
    },

    {
        imageSrc: "/etheruim.svg",
        alt: "Etherium Image"
    },
    {
        imageSrc: "/tether.svg",
        alt: "Tether image"
    },


]

export default function FormContent() {
  return (
    <div className='bg-[#EEECED] w-full h-auto mb-20'>
        <div className="width-container w-full grid grid-cols-1 lg:grid-cols-2 gap-x-40">
            <div className="flex lg:items-start lg:justify-center justify-center items-center  flex-col gap-10 my-10 py-10">
                <h1 className='text-black text-3xl text-center'>
                    CRYPTOCURRENCY PAYMENTS ARE NOW ACCEPTED
                </h1>
                <div className="grid grid-cols-3 w-10/12 mx-auto lg:w-full gap-5 lg:gap-5 ">
                    {imageItem.map((image) => (
                        <Image 
                        key={image.imageSrc}
                        src={image.imageSrc} 
                        alt={image.alt} 
                        height={150} 
                        width={150} />
                    ))}
                </div>
                <h1 className='text-4xl xl:text-6xl text-center font-semibold'>24 X 7 Sales Office </h1>
            </div>
            <div className="h-full bg-neutral-200/50 md:bg-transparent md:w-8/12 md:mx-auto flex items-center justify-center w-full mx-auto">
                <FormContainer />
            </div>
        </div>
    </div>
  )
}
