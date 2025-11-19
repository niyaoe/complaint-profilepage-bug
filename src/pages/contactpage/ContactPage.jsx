import React from 'react'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer'
import NewNavbar from '../../components/NewNavbar'
import MobileTopbar from '../../components/MobileTopbar'

const ContactPage = () => {
  return (
    <div>
      <MobileTopbar/>
        <NewNavbar/>
        <ContactForm/>
        {/* <Footer/> */}
    </div>
  )
}

export default ContactPage