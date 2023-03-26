import  { layout } from "../style";
import{fullscreen, chatscreenicon,   endcall, video, sound,} from '../assets'

const ChatScreen = () => (
  <section id="product" className=''>
    
    <div class="py-8 lg:py-16 mt-20 mx-auto w-[60cm] max-w-screen-md ">

     
      <form action="#" class="space-y-8" className="outline h-[70vh]  shadow-green-700 rounded-lg bg-slate-200 px-10 py-5">
      
      
        
            <img className="w-32 h-32 justify-between ml-[450px] cursor-pointer   mt-5 mb-5 " src={chatscreenicon} alt="fullscreen" />
        
            
     
          
            <img className="w-10 h-10 ml-10 mt-[40vh] cursor-pointer ml-[950px]" src={fullscreen} alt="fullscreen" />
            
            
      </form>
  </div>
<div class="inline-flex  rounded-3xl outline shadow-xl ml-[14cm] mb-20"  role="group">
    
  <button type="button" class=" inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  <img className="block mx-auto h-10 px-10 hover:bg-green-700 rounded-full sm:mx-0 sm:shrink-0" alt="sound" src={sound}/>

  </button>
    
  <button type="button" class=" inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  <img className="block mx-auto h-10 px-10 hover:bg-blue-500 rounded-full sm:mx-0 sm:shrink-0" alt="video" src={video}/>

  </button>
  <button type="button" class=" inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  <img className="block mx-auto h-10 px-10 hover:bg-red-600 rounded-full sm:mx-0 sm:shrink-0" alt="endcall" src={endcall}/>

  </button>
  
</div>

  </section>
);

export default ChatScreen;
