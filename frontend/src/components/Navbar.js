import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../components/navbar/NavbarStyles.css'
import { avsarlogo, close, menu } from "../assets";
import SignUp from "./SignUp";
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
  

    return (
        <nav className=" bg-primary -ml-16 w-full flex py-6 justify-between items-center navbar">
      <Link to='/'> <img src={avsarlogo} alt="peacify" className=" w-[204px] h-[50px] pl-5" /> </Link>

                <ul className={` ${nav ? 'nav-menu active' : 'nav-menu'}`}>
                    <li ><Link  to='/'>Home</Link></li>
                    <li><Link   to='/'>About Us</Link> </li>
                    <li><Link  to='/'>Courses</Link></li>
                    <li><Link   to='/chat'>Interview</Link> </li>
                    <li><Link  to='/contact'>Contact Us</Link></li>
                    <li><Link  to='/login'>Login</Link></li>

                    
                    <div className="ss:flex  hidden md:mr-4 mr-0">
                    <Link to='/sigin'><SignUp /></Link> 
                    </div>
                                  
                </ul>
                <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] bg- black object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }  bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
              <ul className={`font-poppins font-normal cursor-pointer text-[16px] ${nav ? 'nav-menu active' : 'nav-menu'}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>About Us</Link> </li>
                    <li><Link to='/cloud'>Issues</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><div class="dropdown">
                        <div className='text-white'>Username</div>
                        <div class="dropdown-content">
                            <Link to='/'>My Account</Link>
                            <Link to='/contact'>Blog</Link>
                            <Link to='/'>Customer Reviews</Link>
                            <Link to='/contact'>Internship</Link>
                            <Link to='/contact'>Log out</Link>
                        </div>
                        </div>
                    </li>
                </ul>

</div>
      </div>
    </nav>
      
        //         <div className="hamburger" onClick={handleNav}>
        //             {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar
