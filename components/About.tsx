import Image from 'next/image'
import React from 'react'
import Title from './ui/title'

const About = () => {
  return (
    <section className='padding w-full flex justify-between max-h-screen' id='about'>
             <div className='flex-1 w-full flex items-start justify-start'>
            <Image src="/hero_image.JPG" alt='main-image' sizes='100vw' width={0} height={0} className='object-cover w-[80%] h-full object-center' />
        </div> 

        <div className='flex-1 flex flex-col justify-center gap-6'>
        <Title title='Know Me More' />
            <p className='text-gray-300 max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laboriosam sequi, autem odit inventore recusandae placeat. Eaque a nobis aperiam?</p>

            

        </div>


    </section>
  )
}

export default About