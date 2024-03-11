import React from 'react'
import { FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Icon from './ui/icon';
import Link from 'next/link';

const Footer = () => {

const socialIcons = [
{
    Icon: FaFacebookF, 
    href:'https://www.facebook.com/bindasbishnu.timilsaina.9'
},
{
    Icon: FaInstagram,
    href:'https://www.instagram.com/bataas_02/' 
},
{
    Icon: FaLinkedinIn,
    href:'https://www.linkedin.com/in/bishnu-timilsaina/'
},
{
    Icon: FaXTwitter,
    href:'https://www.linkedin.com/in/bishnu-timilsaina/'
}
]

const contactInfo = [
    {
        Icon: FaPhoneAlt,
        details: '9876543210'
    },
    {
        Icon: MdEmail,
        details: '9876543210'
    },
    {
        Icon: FaLocationDot,
        details: 'Sydney, Australia'
    },
    

]



  return (
    <section className='padding grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32 justify-between items-start w-full'>
     <div className='flex flex-col gap-6'>
        <div></div>
        <p className=''>I began my work as an engineers freelancer before taking the position of head.</p>
        <div className='flex gap-4'>
            {socialIcons.map((social,index)=>(
                <Link href={social.href} key={index} >
                <Icon Icon={social.Icon} />
                </Link>
            ))}
        </div>

    </div>

    <div className='flex-1 flex flex-col md:pl-16 gap-6'>
    <h1 className='text-3xl text-customText font-bold pb-2 relative w-fit uppercase'>
Services
    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-customText"></span></h1>
    <div className='flex flex-col gap-4'>
    <p className='text-white text-left'><span className='mr-2'>&#8226;</span>Identifying Threats</p>
    <p className='text-white text-left'><span className='mr-2'>&#8226;</span>Network Security</p>
    <p className='text-white text-left'><span className='mr-2'>&#8226;</span>Database Security</p>
    <p className='text-white text-left'><span className='mr-2'>&#8226;</span>Identifying Threats</p>
    </div>
      
    </div>

    <div className='flex-1 flex flex-col gap-6'>
    <h1 className='text-3xl text-customText font-bold pb-2 relative w-fit'>
    CONTACT
    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-customText"></span>
</h1>
        <div className='flex flex-col gap-4'>
            {contactInfo.map((contact)=>(
                <div className='flex items-center gap-4' key={contact.details}>
                    <Icon Icon={contact.Icon} />
                    <p>{contact.details}</p>
                </div>
            ))}
        </div>
    </div>

   

    </section>
  )
}

export default Footer