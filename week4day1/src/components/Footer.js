import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () =>{
    useEffect(() => {
        AOS.init({
          // Global settings for AOS here (optional)
        });
      }, []);
    return(
        <div className="lg:px-[0rem] md:px-[2.5rem] py-[2.5rem] px-[1rem] pt-[5rem]">
            <div className="grid grid-cols-2 ">
                <div>
                    <div className="flex">
                    <img src="Logo.svg" alt="" /><p className="text-black font font-semibold lg:text-[2.5rem] text-[1rem] md:text-[1.5rem] pt-2 md:pt-1 lg:pt-0 pl-[0.3rem] lg:pl-[0.5rem] text-white" data-aos="zoom-in">YORFY</p>
                    </div>
                </div>
                <div  className="social-icons lg:pt-[1rem]    text-end">
                <i data-aos="zoom-in" class="fab fa-instagram text-white"></i>
                <i data-aos="zoom-in" class="fab fa-instagram text-white"></i>
                <i data-aos="zoom-in" class="fab fa-instagram text-white"></i>
                <i data-aos="zoom-in" class="fab fa-instagram text-white"></i>
                

                

                </div>

            </div>
            <hr class="border-1 mt-[1rem] lg:mt-[0px] border-[#1E50FF]"/>
            <div className="pt-[1.5rem]">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                    <div>
                    <p  className="font font-normal md:text-[0.9rem] line-height-8 text-[1rem]  lg:text-[1rem] text-white" style={{lineHeight:"32px"}}>© 2022 Yorfy Template • All Rights Reserved</p>
                    </div>
                    <div>
                   <p  className="font md:text-end md:text-[0.9rem] text-[1rem]  lg:text-end text-left font-normal text-white lg:text-[1rem]"style={{lineHeight:"32px"}} >Made With Love by Groweb Studio</p>
                    </div>
                    

                </div>

            </div>



        </div>
    )
}
export default Footer;