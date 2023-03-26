import { blog1, blog2 } from "../constants";
import styles from "../style";
import { avsarlogo} from "../assets";

import {Link} from 'react-router-dom'

const Login = () => (
  <section id="blog" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative pl-20 `}>
    {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}
  <section className="-mb-16 -mt-20 bg-gray-50 dark:bg-gray-900">
<div className="flex flex-row">
  
  <div class="flex flex-col items-start justify-center  md:h-screen lg:py-0">
      <a href="#" class="flex mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-full h-8 mr-2 bg-black" src={avsarlogo} alt="logo"/>
             
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class=" w-[450px] space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log In
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required=""/>
                  </div>

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button type="submit" class="w-full text-white bg-[#367C57] hover:bg-[#0b3b22] rimary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log In</button>
                 
              </form>
          </div>
      </div>
  </div>



  </div>
</section>
  </section>
);

export default Login;
