import React from 'react'
import '../components/navbar/NavbarStyles.css'

import styles from "../style";


import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Blog from '../components/Blog'

const BlogPage = () => {
    return (
        <>
           <Navbar /> 
           <Blog/>
           
           <div className={`bg-primary px-10 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Footer />
      </div>
    </div>
        </>
    )
}

export default BlogPage
