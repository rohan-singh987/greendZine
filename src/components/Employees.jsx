import React from 'react'
import { employees } from '../utils/empData'

const Employees = () => {
  return (
    <div>
        <div className='md:mx-5 mx-2'>
            {
                employees.map((data) => {
                    return(
                        <div key={data.id} className={`my-10 w-11/12 md:w-3/4 ${data.id%2 == 0 ? `ms-auto` : `me-auto` } `}>
                            <div className='flex flex-col md:px-10 px-3 py-3 rounded-3xl empBox'>
                                <div className='flex justify-between my-2 opacity-100  '>
                                    <p className=' text-white'>EMP ID : {data.id}</p>
                                    <span>
                                        {data.id}
                                    </span>
                                </div>
                                <p className='my-2 text-white'>Name : <span  className='font-extrabold'> {data.name} </span> </p>
                                <p className='my-2 text-white'>DOB : <span className='text-orange-500 font-bold'> {data.dob} </span> </p>
                                <p className='my-2 text-white'>Role : <span className='text-green-800 font-bold'> {data.role} </span> </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Employees