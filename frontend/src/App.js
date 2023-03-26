import React from 'react'
import styles from "./style";
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Billing from './components/Billing';
import Testimonials from './components/Testimonials';
import Business from './components/Business';
import CTA from './components/CTA';

function App() {
  return (
    <>
       <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>

   
    <div className={`mt-24 bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <Billing />
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
      
        <Business />
       
        {/* <CardDeal /> */}
        <Testimonials />
        {/* <Clients /> */}
        <CTA />
        {/* <Login/> */}
        <Footer />
        </div>
        </div>

    </>
  );
}

export default App;
