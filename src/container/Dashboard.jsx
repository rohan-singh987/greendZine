import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BarChart from '../components/BarChart'

const Dashboard = () => {
  return (
    <div className='min-h-screen m-3'>
        <Header />
        <BarChart />
        <Footer />
    </div>
  )
}

export default Dashboard