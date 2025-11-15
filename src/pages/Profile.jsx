import React from 'react'
import NewNavbar from '../components/NewNavbar'
import ProfilePage from '../components/ProfilePage'
import Footer from '../components/Footer'
import MobileTopbar from '../components/MobileTopbar'

const Profile = () => {
  return (
    <div>
      <MobileTopbar/>
        <NewNavbar/>
        <ProfilePage/>
        {/* <Footer/> */}
    </div>
  )
}

export default Profile