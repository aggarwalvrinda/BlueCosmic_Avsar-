import React from 'react'
import '../components/navbar/NavbarStyles.css'

import styles from "../style";


import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Login from '../components/Login'

const LogInPage = () => {
    return (
        <>
        
           <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>
    <Login/>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
                <Footer />
               </div>
            </div>
        </>
    )
}

export default LogInPage
