import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Logos = () =>{
    useEffect(() => {
        AOS.init({
          // Global settings for AOS here (optional)
        });
      }, []);
    return(
        <div>
            <div className="lg:px-[0rem] md:px-[2.5rem] px-[1rem]">
                <p data-aos="fade-up" className="text-center font text-[1rem] text-[#5699FF]">Collaboration</p>
                <p data-aos="fade-up" className="text-center font font-bold pt-[1rem] lg:text-[3.5rem] md:text-[2rem] text-white">Our Partners</p>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-[1.5rem] pt-[1.5rem] lg:gap-[7.8rem] md:grid-cols-2 md:pt-[2.5rem]">
                <div data-aos="fade-up">
                        <img src="log3.svg" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img src="log2.svg" alt="" />
                    </div >
                   
                    <div data-aos="fade-up" className="md:pt-[3.5rem] pt-[1.5rem] lg:pt-[8px]">
                        <img src="log4.png" alt="" />
                    </div>
                    <div data-aos="fade-up" className="md:pt-[3.2rem] pt-[1rem] lg:pt-[0px]">
                        <img src="log1.png" alt="" />
                    </div>
                    

                </div>


            </div>


        </div>
    )
}
export default Logos;