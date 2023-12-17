import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Shop = () =>{
    useEffect(() => {
        AOS.init({
          // Global settings for AOS here (optional)
        });
      }, []);
    return(
        <div  className="bg-[#051139] lg:pt-[4rem] md:pt-[4rem]">
            <div className="lg:pl-[0rem] md:pl-[2.5rem] px-[1rem] sm:px-[0rem]">
                <div className="grid lg:grid-cols-2 md:grid-cols-1  ">
                    <div className="order-2 md:order-2 lg:order-1 md:pt-[2rem] lg:pt-[0rem] pt-[1rem]">
                    <p  className="font text-[#5699FF] text-[1rem] font-bold md:text-center lg:text-start text-center" data-aos="zoom-in">Community</p>
                    <p 
     className="font lg:text-[3.4rem] md:text-[2rem] md:text-[2rem] text-[1.8rem]  text-center md:px-[1rem] lg:px-[0px] md:text-center lg:text-start  font-semibold pt-[1rem] text-white" data-aos="zoom-in">Join Our Community and Get Many Benefits</p>
                    <p 
      className="font md:text-[1rem]  font-normal md:text-center lg:text-left pt-[1rem] font-normal md:px-[2.5rem] lg:px-[0px] px-[0px] text-center leading-8 pb-[1.5rem] text-white" data-aos="zoom-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div 
   className="md:text-center lg:text-start text-center" data-aos="zoom-in">
                    <button class="bg-[#1E50FF] text-white lg:py-[0.5rem] lg:w-[35%] md:w-[30%] md:py-[0.5rem] py-[0.5rem] w-full px-[2.5rem]  rounded">
                        <span>Join Our Discord</span>
</button>
</div>

                    </div>
                    <div className="order-1 md:order-1 pt-[2rem] md:pt-[0rem]">
                        
<div    class="block max-w-full lg:ml-[3.5rem]   lg:mr-[4rem] md:mr-[19rem] mr-[0px] mt-[0.6rem] bg-[#081956]  rounded py-[1rem] px-[1rem]">
<div  class="flex " data-aos="zoom-in">
    <div class="">
        <img src="Avatar.png" alt="" />
    </div>
    <div class=" flex flex-col ml-[1rem] leading-8" >
        <p class="font text-[1rem] font-bold text-white">ShooPharDhie</p>
        <p class="font text-[0.75rem] text-white">Last Online 2 Hour Ago</p>
    </div>
    <div className="ml-auto items-center pt-[1rem]">
        <img src="more_horiz.svg" alt="" />
    </div>
</div>

</div>
<div  class="block max-w-full lg:mr-[2rem] md:mr-[12rem]  shadow-custom much lg:ml-[6rem]  md:ml-[8.5rem] mt-[0.9rem]  bg-[#081956]  rounded py-[1rem] px-[1rem]">
<div  class="flex " data-aos="zoom-in">
    <div class="">
        <img src="Avatar.png" alt="" />
    </div>
    <div class=" flex flex-col ml-[1rem] leading-8">
        <p class="font text-[1rem] font-bold text-white">ShooPharDhie</p>
        <p class="font text-[0.75rem] text-white">Last Online 2 Hour Ago</p>
    </div>
    <div className="ml-auto items-center pt-[1rem]">
        <img src="more_horiz.svg" alt="" />
    </div>
</div>

</div>
<div  class="block max-w-full  lg:ml-[9rem] md:ml-[17rem] md:mr-[2rem] lg:mr-[0rem] muchi mt-[0.9rem] bg-[#081956]  rounded py-[1rem] px-[1rem]">
<div  class="flex " data-aos="zoom-in">
    <div class="">
        <img src="Avatar.png" alt="" />
    </div>
    <div class=" flex flex-col ml-[1rem] leading-8">
        <p class="font text-[1rem] font-bold text-white">ShooPharDhie</p>
        <p class="font text-[0.75rem] text-white">Last Online 2 Hour Ago</p>
    </div>
    <div className="ml-auto items-center pt-[1rem]">
        <img src="more_horiz.svg" alt="" />
    </div>
</div>

</div>

                        
                    </div>

                </div>
                

            </div>


        </div>
    )
}
export default Shop;