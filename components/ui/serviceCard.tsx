import { IServiceCard } from '@/lib/interface'
import React from 'react'



const ServiceCard:React.FC<IServiceCard> = ({Icon, title, description}) => {
  return (
    <div className='flex flex-col justify-between items-center gap-4 relative border border-solid border-customText py-6 px-4 card-shadow'>
        <div className= 'absolute top-[-25%] rounded-full flex justify-center items-center  w-16 h-16 bg-blue-100 text-customText'>
          <div className='rounded-full border-[3px] border-solid border-customText p-1.5'><Icon fontSize={40}  /></div>
            
        </div>
        <h4 className='mt-6 text-xl font-semibold text-black'>{title}</h4>
        <p className='text-center text-black'>{description}</p>
    </div>
  )
}

export default ServiceCard