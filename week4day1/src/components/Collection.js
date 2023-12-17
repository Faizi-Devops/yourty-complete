import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Collection = () =>{
    useEffect(() => {
        AOS.init({
          // Global settings for AOS here (optional)
        });
      }, []);
    return(
        <div className="px-[4.5rem] md:px-[2.5rem] px-[1rem] pb-[0.8rem]">
            <p data-aos="zoom-in" className="font text-[#5699FF] text-center font-bold text-[1rem]">Collection</p>
            <p data-aos="zoom-in" className="font text-center lg:text-[3.5rem] md:text-[2rem] text-[2rem] text-white font-bold py-[1rem]">Yorfy NFT Collections</p>
            
            <p data-aos="zoom-in" className="font text-center lg:px-[17rem] md:pt-[1rem] text-[1rem] text-[1rem] pb-[1rem] md:pb-[1.5rem] pt-[0.5rem] font-normal  text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
    )
}
export default Collection;