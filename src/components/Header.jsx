import React from 'react'
import contact from '../assets/contact.png'
import moptro from '../assets/moptro.png'

const Header = () => {
  return (
    <div className=''>
        <div className='flex items-end justify-end '>
            <img src={contact} alt="" />
        </div>

        <div className='flex justify-center mt-2 md:mt-5'>
            <img src={moptro} alt="" />
        </div>
    </div>
  )
}

export default Header