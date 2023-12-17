import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Featured  = () =>{
    useEffect(() => {
        AOS.init({
          // Global settings for AOS here (optional)
        });
      }, []);
    return (
        <div>
            <div className="lg:px-[16.5rem] md:px-[2.5rem] pt-[4rem] px-[1rem]">
                <p data-aos="zoom-in" className="font-extrabold font text-center text-[1rem] text-[#5699FF]">Featured</p>
                <div>
                    <p data-aos="zoom-in" className="lg:pt-[1rem]  lg:text-[3.5rem] md:pt-[1rem] pt-[0.5rem] lg:px-[4rem] md:text-[2rem] font font-extrabold text-white text-center text-[2rem]">Hot Trending On This Week from Yorfy</p>
                    <p data-aos="zoom-in" className="font text-center md:pt-[1rem] text-[1rem] text-[1rem] pb-[1rem] md:pb-[1.5rem] pt-[0.5rem] font-normal lg:px-[3rem] text-white lg:pb-[2.5rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    

                </div>

            </div>

        </div>
    )
}
export default Featured;