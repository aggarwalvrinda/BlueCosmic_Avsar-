import React from 'react'

import '../components/navbar/NavbarStyles.css'

import styles from "../style";

import Contact from '../components/ContactUs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ContactPage = () => {
    return (
        <>
              <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>
            <Contact />
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
                <Footer />
               </div>
            </div>
        </>
    )
}

export default ContactPage
