import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Cards = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS here (optional)
    });
  }, []);
  return (
    <div className="lg:px-[rem] md:px-[2.5rem] px-[1rem] ">
        <div className="">

        
      <div className="grid lg:gap-[1rem] grid-cols-1 md:grid-cols-2  md:gap-[1rem] lg:grid-cols-3 justify-center">
        <div>
          <div data-aos="flip-left" class="block max-w-sm lg:p-[1.5rem] md:p-[1rem] p-[1rem] mt-[1rem]     border border-[#1E50FF] rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="sixfaces1.png" alt="" className="w-full" />
            <div className=" flex pt-[1.5rem]">
                
            <img src="Logo.svg" alt="" />
            <p className="lg:text-[1.5rem] md:text-[1rem] text-[1rem] text-black font font-semibold pl-[1rem] md:pt-[0.5rem] text-white">YorNoose #432</p>

            </div>
            
          </div>
        </div>
        <div>
          <div data-aos="flip-left" class="block max-w-sm lg:p-[1.5rem] md:p-[1rem] p-[1rem] mt-[1rem]  border border-[#1E50FF] rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="2.png" alt="" className="w-full" />
            <div className=" flex pt-[1.5rem]">
                
            <img src="Logo.svg" alt="" />
            <p className="lg:text-[1.5rem] text-[1rem] text-black font font-semibold pl-[1rem] text-white md:pt-[0.5rem]">YorHayr #332</p>

            </div>
            
          </div>
        </div>
        <div className="md:hidden lg:block">
          <div data-aos="flip-left" class="block mx-auto max-w-sm  md:col-span-12  lg:p-[1.5rem] md:p-[1rem] p-[1rem] mt-[1rem] md:mt-[0rem] lg:mt-[1rem] border border-[#1E50FF] rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="3.png" alt="" className="w-full" />
            <div className=" flex pt-[1.5rem]">
                
            <img src="Logo.svg" alt="" />
            <p className="lg:text-[1.5rem] text-black md:text-[1rem] text-[1rem] font font-semibold pl-[1rem] text-white md:pt-[0.5rem]">YorMwoth #765</p>

            </div>
            
          </div>
          
        </div>
        
        
      </div>
      <div >
      <div className="mt-[1rem] hidden md:block lg:hidden">
          <div data-aos="flip-left" class="block mx-auto max-w-sm    lg:p-[1.5rem] md:p-[1rem] p-[1rem] mt-[1rem] md:mt-[0rem] lg:mt-[1rem] border border-[#1E50FF] rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="3.png" alt="" className="w-full" />
            <div className=" flex pt-[1.5rem]">
                
            <img src="Logo.svg" alt="" />
            <p className="lg:text-[1.5rem] text-black md:text-[1rem] text-[1rem] font font-semibold pl-[1rem] text-white md:pt-[0.5rem]">YorMwoth #765</p>

            </div>
            
          </div>
          
        </div>
      </div>
      </div>
      
    </div>
    
  );
};
export default Cards;
