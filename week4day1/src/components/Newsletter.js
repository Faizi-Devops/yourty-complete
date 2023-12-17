import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Newsletter = () =>{
    
        useEffect(() => {
          AOS.init({
            // Global settings for AOS here (optional)
          });
        }, []);
    return(
        <div>
            
            
<div href="#" class="block max-w-full lg:mx-[0rem] mt-[4rem] md:mx-[2.5rem] mx-[1rem]  bg-[#081956]  rounded-lg shadow">
    <div className="lg:p-[80px] md:p-[40px] p-[16px]">
        <p data-aos="zoom-in" className="news">Newsletter</p>
        <div>
        <p data-aos="zoom-in" className="text-white text-center font lg:text-[40px] text-[2rem] md:px-[10px] doyou pt-[16px]">You Do Not Want to Miss Out on this!</p>
        <p data-aos="zoom-in" className=" text-white font text-center text-[1rem] pt-[16px] md:px-[20px] lg:px-[230px] leading-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua.</p>
        </div>
        <div data-aos="zoom-in" className="lg:pl-[17rem] md:pl-[8rem]">
        <div className="grid grid-cols-1  lg:gap-4  md:grid-cols-2 md:gap-3 pt-[40px] ">
            <div>
                
            
        <input type="text" id="first_name" class="bg-[#081956]   w-full  font border border-gray-300 text-white text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block  p-2.5" placeholder="Your Email" required />
        </div>
        <div className="text-end md:text-start lg:text-start">
        <button class="bg-[#1E50FF] mt-[16px] md:mt-[0px] w-full lg:w-[100px] h-[2.7rem] md:w-[100px]  text-white font-bold py-2 px-4 rounded">
  Submit
</button>
            </div> 


        </div>
        </div>

    </div>


</div>

        </div>
    )
}
export default Newsletter;