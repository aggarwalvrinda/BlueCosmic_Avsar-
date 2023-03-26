import {Link} from 'react-router-dom'
import styles from "../style";
import { boticon, robot, bot} from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:-mt-[100px] md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={boticon} alt="boticon" className="bg-white rounded-3xl w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>

            <span className="text-white">Interview Voice Bot</span> 
            {/* <span className="text-white">1 Month</span> Account */}
          </p>
        </div>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Revolutionizing <br className="sm:block hidden" />{" "}
            Interview Preprations<br className="sm:block hidden" />{" "}
            with <span className="text-gradient">AVSAR</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-400`}>
        Streamline interview prep with our 24/7 voice chatbot for feedback and assistance.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <img src={bot} alt="bot" className="w-[559px] h-[711px] mt-10 relative z-[5]" />
        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      <button onclick="buttonHandler()" title="Chat Bot"
        class="fixed z-90 bottom-10 right-8 bg-sky-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">
          <Link to='/chat'><img src={boticon} alt="chat"/></Link>
        </button>
    </section>
  );
};

export default Hero;
