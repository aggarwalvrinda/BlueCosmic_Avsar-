import React from 'react'
import '../components/navbar/NavbarStyles.css'

import styles from "../style";

import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Account from '../components/Account'

const AccountPage = () => {
    return (
        <>
           <Navbar /> 
           <Account/>
           
           {/* <div className={`bg-primary px-10 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Footer />
      </div>
    </div> */}
        </>
    )
}

export default AccountPage
