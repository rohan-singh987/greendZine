import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Footer = () => {

    const [clicked, setClicked] = useState("/")
    const navigate = useNavigate();

    useEffect(() => {
        setClicked(window.location.pathname)
        console.log(window.location.pathname);
    },[window.location.pathname])
    
    const handleClick = (component) => {
        setClicked(component);
        navigate(component);
    }

    return (
        <div className='flex justify-evenly fixed  z-20 w-full rounded-3xl bottom-0 footerColor opacity-95'>
            <div className={`${clicked === "/" ?`bg-[#38383858] ` :``} w-full py-5 rounded-3xl flex justify-center items-center cursor-pointer transition-all hover:bg-[#383838af]`} 
                onClick={() => handleClick("/")}>
                <FaHome className='text-green-600 text-3xl  blur-none opacity-100   transition-all' />
            </div>

            <div onClick={() => handleClick("/employee-list")}
                className={`${clicked === "/employee-list" ? `bg-[#38383858]` : ``} w-full py-5 rounded-3xl flex justify-center cursor-pointer transition-all items-center hover:bg-[#383838af]`}
            >
                <IoPerson className='text-green-600 text-3xl hover:text-green-300 hover:scale-150 transition-all' />
            </div>
        </div>
    )
}

export default Footer