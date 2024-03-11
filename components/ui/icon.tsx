import React from 'react'
import { IconType } from "react-icons";


interface IconProps {
    Icon: IconType
}


const Icon:React.FC<IconProps> = ({Icon}) => {
  return (
    <div className='w-8 h-8 flex justify-center items-center bg-gray-500 hover:bg-customText cursor-pointer'>
        <Icon fontSize={20} color='white' />
    </div>
  )
}

export default Icon