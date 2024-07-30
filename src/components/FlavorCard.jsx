import React from 'react'
import cookie1 from '../assets/cookie1.png';

const FlavorCard = () => {
  return (
   <>
    <div className='h-16 w-16 border-2 border-tuatara rounded-full'>
        <img src={cookie1}  className='w-full h-full rounded-full object-cover' />
    </div>
   </>
  )
}

export default FlavorCard