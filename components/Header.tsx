import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Header = () => {
  return (
    <section className='flex justify-between gap-16 max-h-[70vh]'>
        <div className='flex-1 flex flex-col gap-4 w-full'>
            <h4 className='uppercase text-xl'>Hello I&apos;m</h4>
            <h1 className='uppercase text-5xl text-customText font-bold tracking-wide'>BISHNU TIMILSAINA</h1>
            <h5 className='text-xl tracking-wider'>CYBER SECURITY ANALYST</h5>  
            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum hic facere provident ducimus quaerat eum voluptates, modi voluptas esse.</p>  
            <Button className='mt-4 w-fit text-white'>Download Resume</Button>
        </div>

        <div className='flex-1 w-full'>
            <Image src="/hero_image.JPG" alt='main-image' sizes='100vw' width={0} height={0} className='object-contain w-[80%] h-full' />
        </div> 
    </section>
  )
}

export default Header