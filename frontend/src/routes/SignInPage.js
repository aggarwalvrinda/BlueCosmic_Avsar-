import React from 'react'
import '../components/navbar/NavbarStyles.css'

import styles from "../style";


import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Signuplogin from '../components/Signuplogin'

const SignInPage = () => {
    return (
        <>
         
           
           <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>
    <Signuplogin/>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
                <Footer />
               </div>
            </div>
        </>
    )
}

export default SignInPage
