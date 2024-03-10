import React from 'react'
import Title from './ui/title'
import ContactForm from './contactForm'

const Contact = () => {
  return (
    <section className='padding'>
       <div className='flex flex-col gap-6'>
        <Title title='GET IN TOUCH' />
        <p>I am an Cyber Security Analyst with experience in a variety of related fields, including network security.</p>
      <ContactForm />
       </div>
     </section>
  )
}

export default Contact