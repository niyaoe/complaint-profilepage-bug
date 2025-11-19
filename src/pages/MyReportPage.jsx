import React from 'react'
import NewNavbar from '../components/NewNavbar'
import MyReport from '../components/MyReports'
import Footer from '../components/Footer'
import MobileTopbar from '../components/MobileTopbar'

const MyReportPage = () => {
  return (
    <div>
      <MobileTopbar/>
        <NewNavbar/>
        <MyReport/>
        {/* <Footer/> */}
    </div>
  )
} 

export default MyReportPage

