import { apple, bill, google, aboutus } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <div className="" >
  <section id="product" className={`${layout.sectionReverse} bg-white  `}>
   

    <div className='mr-24 ${layout.sectionInfo }'>
      <h1 className={`${styles.heading2} px-16 text-black`}>
        About Us
      </h1>
      <p className={`${styles.paragraph}  px-16 text-black max-w-[650px] mt-5`}>
        <h2 className={'font-poppins -mr-28 font-bold text-[20px] leading-[24px]  text-black '}>Welcome to AVSAR:The AI-driven Chatbot for Interview Preparation</h2>
        Interviews can be daunting, especially for freshers who lack experience in the job market.
         However, with the right preparation, you can confidently tackle any interview and land your dream job. That's where AVSAR comes in - our innovative AI-driven chatbot is designed to help you ace your interviews.
        <br></br><br></br>
         <h2 className={'font-poppins font-bold -mr-28 text-[20px] leading-[24px]  text-black  '}>Instant Feedback: Improve Your Interview Skills</h2>
          AVSAR doesn't just ask you questions - it provides valuable feedback on the basis of your responses
          <br></br><br></br>
          <h2 className={'font-poppins font-bold -mr-28 text-[20px] leading-[24px]  text-black '}>Sign Up for AVSAR Today & Ace Your Next Interview</h2>
          Don't let the fear of interviews hold you back from achieving your career goals. Sign up for AVSAR today and take the first step towards becoming a confident and successful interviewee.

      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={aboutus} alt="billing" className="w-[100%] h-[70%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

  </section>
  </div>
);

export default Billing;
