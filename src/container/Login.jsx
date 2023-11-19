import React, { useState } from 'react'
import icon from '../assets/icon2x.png'
import iconRes from '../assets/icon.png'

const Login = ({ setLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        try {
            console.log("clicked");
            setLogin(true)
        }
        catch (err) {
            console.error(err);
        }
    }


    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='md:mb-10 mb-14'>
                <img src={iconRes} className='block md:hidden' alt="" />
                <img src={icon} className='hidden md:block' alt="" />
                <h1 className='text-[#36A546CC] text-center' >#We are Electric</h1>
            </div>
            <div>
                <div className='inputBox my-4 rounded-xl px-5 py-2'>
                    <input type="text" placeholder='E-mail'
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#1F191966] outline-none'
                    />
                </div>
                <div className='inputBox my-4 rounded-xl px-5 py-2'>
                    <input type="password" placeholder='Password'
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#1F191966] outline-none'
                    />
                </div>

                <div className='flex flex-col'>
                    <button type='submit' onClick={handleLogin}
                        className='mt-6 mb-3 py-2 rounded-xl font-bold loginBtn'
                    >
                        Login
                    </button>

                    <button className='mt-1 text-[#36A546]' >Forgot Password?</button>
                </div>

            </div>
        </div>
    )
}

export default Login