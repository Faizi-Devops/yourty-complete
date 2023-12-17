import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Eyescard = () =>{
    useEffect(() => {
        AOS.init({
          // Global settings for AOS here (optional)
        });
      }, []);
    return(
        <div>
            <div className="bg-[#081956] lg:p-[2.5rem]  px-[1rem] my-[1rem] mx-[1rem] md:mx-[1.5rem] rounded-lg md:px-[0]">
                <div className="grid lg:grid-cols-3 md:gap-4 lg:gap-0  md:grid-cols-3 md:px-[1rem] lg:px-[0rem]">
                    <div data-aos="zoom-in" className="lg:order-1 order-2 md:order-1 pt-[2rem] md:pt-[1rem] lg:pt-[2rem]">
                        <div className="flex lg:justify-center">
                        <img src="Logo.svg" alt="" />
                        </div>
                        <p className="text-white lg:px-[5rem] lg:text-center font lg:text-[2.5rem] lg:font-bold lg:pt-[1rem] lg text-[1.5rem] lg:pb-[1rem] pt-[0.5rem] md:text-[1rem]">YorEyes #234</p>
                       
                        <p className="text-white lg:text-center text-[1rem] lg:text-[1rem] font-normal leading-8 font lg:px-[4rem] pb-[0.5rem] md:text-[0.8rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div data-aos="zoom-in" className="lg:order-2 order-1 pt-[1rem]">
                        <img src="newimage.png" className="" alt="" />
                    </div>

                    <div data-aos="zoom-in" className="pt-[2rem] lg:pt-[0rem] lg:order-3 order-3 md:pt-[1rem]">
                        <p className="lg:text-center lg:text-[2.5rem] font font-bold lg:px-[4rem] text-[1.5rem] text-white md:text-[1rem]">Interesting with This Item?</p>
                        <p className="font lg:text-center text-white lg:px-[4rem] leading-8 md:text-[0.8rem] lg:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       <div className="text-center lg:pt-[1rem] pt-[1rem] pb-[1rem]">

                       
                        <button class="bg-[#1E50FF] hover:bg-blue-700 text-white w-full lg:w-[12rem]  font py-2 lg:px-6 border border-blue-700 rounded">
                        Buy on OpenSea
</button>
</div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Eyescard;