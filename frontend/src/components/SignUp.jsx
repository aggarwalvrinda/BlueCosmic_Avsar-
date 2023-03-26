import React from "react";
import {Link} from 'react-router-dom'
const SignUp = ({ styles }) => (
  <button type="button" className={` py-2 px-6 rounded-lg font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[30px] outline-none ${styles}`}>
    <Link to='/sigin'>Sign Up</Link>
  </button>
);

export default SignUp;
