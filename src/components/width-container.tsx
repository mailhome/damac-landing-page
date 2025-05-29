import React, { ReactNode } from 'react'

interface WidthContainerProps {
    children: ReactNode;
}

export default function WidthContainer({
    children
}: WidthContainerProps) {
  return (
    <div className='mx-auto px-3 sm:px-4 container md:px-6 lg:px-10 xl:px-0 2xl:max-w-[1800px]'>
      { children }
    </div>
  )
}
