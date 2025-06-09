import React, { ReactNode } from 'react'

interface WidthContainerProps {
    children: ReactNode;
}

export default function WidthContainer({
    children
}: WidthContainerProps) {
  return (
    <div className=''>
      { children }
    </div>
  )
}
