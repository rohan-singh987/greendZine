import React from 'react'
import { Progress } from 'antd';

const BarChart = () => {
    return (
        <div className='empBox w-11/12 md:3/4 mx-auto my-10 rounded-3xl'>
            <div className='px-4 py-3 mb-24'>
                <div className='my-8'>
                    <div className='flex justify-between'>
                    <p>Productivity on Monday </p>
                    <p className='text-[#36A54680] me-5 font-bold md:me-72'> 4% </p>
                    </div>
                    <Progress percent={4}  strokeColor='#36A54680' />
                </div>
                <div className='my-8'>
                    <div className='flex justify-between'>
                    <p>Productivity on Tuesday </p>
                    <p className='text-[#36A54680] me-5 font-bold md:me-72'> 92% </p>
                    </div>
                    <Progress percent={92} strokeColor='#36A54680' />
                </div>
                <div className='my-8'>
                    <div className='flex justify-between'>
                    <p>Productivity on Wednesday </p>
                    <p className='text-[#36A54680] me-5 font-bold md:me-72'> 42% </p>
                    </div>
                    <Progress percent={42} strokeColor='#36A54680' />
                </div>
                <div className='my-8'>
                    <div className='flex justify-between'>
                    <p>Productivity on Thursday </p>
                    <p className='text-[#36A54680] me-5 font-bold md:me-72'> 93% </p>
                    </div>
                    <Progress percent={93} strokeColor='#36A54680' />
                </div>
                <div className='my-8'>
                    <div className='flex justify-between'>
                    <p>Productivity on Friday </p>
                    <p className='text-[#36A54680] me-5 font-bold md:me-72'> 89% </p>
                    </div>
                    <Progress percent={89} strokeColor='#36A54680' />
                </div>
                <div className='my-8'>
                    <div className='flex justify-between'>
                    <p>Productivity on Satday </p>
                    <p className='text-[#36A54680] me-5 font-bold md:me-72'> 90% </p>
                    </div>
                    <Progress percent={90} strokeColor='#36A54680' />
                </div>
            </div>

        </div>
    )
}

export default BarChart