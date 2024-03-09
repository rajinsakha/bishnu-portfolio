import React from 'react'

const Title = ({title}:{title:string}) => {
  return (
    <h1 className='text-3xl text-customText font-bold tracking-wide uppercase'>{title}</h1>
  )
}

export default Title