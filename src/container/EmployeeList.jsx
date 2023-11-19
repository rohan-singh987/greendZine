import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Employees from '../components/Employees'

const EmployeeList = () => {
    return (
        <div className='min-h-screen m-3'>
            <Header />

            <Employees />

            <Footer />
        </div>
    )
}

export default EmployeeList