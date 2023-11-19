import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='flex justify-evenly fixed py-5 z-20 w-full rounded-3xl bottom-0 footerColor opacity-80'>
        <div>
            <Link to={"/"}>
                <FaHome className='text-green-600 text-3xl hover:text-green-300 hover:scale-150 cursor-pointer transition-all' />
            </Link>
        </div>

        <div>
            <Link to={"/employee-list"}>
                <IoPerson className='text-green-600 text-3xl hover:text-green-300 hover:scale-150 cursor-pointer transition-all' />
            </Link>
        </div>
    </div>
  )
}

export default Footer