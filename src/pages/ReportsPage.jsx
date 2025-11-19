import React from 'react'
import NewNavbar from '../components/NewNavbar'
import Reports from '../components/Reports'
import Footer from '../components/Footer'
import MobileTopbar from '../components/MobileTopbar'

const ReportsPage = () => {
  return (
    <div>
      <MobileTopbar/>
        <NewNavbar/>
        <Reports/>
        {/* <Footer/> */}
    </div>
  )
}

export default ReportsPage