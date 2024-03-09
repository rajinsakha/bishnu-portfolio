import { IServiceCard } from '@/lib/interface'
import React from 'react'

const ServiceCard = ({service}:{service:IServiceCard}) => {
  return (
    <div className='flex flex-col items-center gap-6'>
        <div className=''>
            <service.Icon fontSize={20}  />
        </div>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
    </div>
  )
}

export default ServiceCard