import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Button = () =>{
    useEffect(() => {
        AOS.init({
          // Global settings for AOS here (optional)
        });
      }, []);
    return(
        <div data-aos="zoom-in" className="text-center mt-[2rem] md:mx-[0rem] mx-[1rem]">
            <button class="bg-transparent text-white font-semibold  py-2 px-4 border border-white w-full lg:w-[13rem] md:w-[13rem]  hover:border-transparent rounded">
  View on OpenSea
</button>


        </div>
    )
}
export default Button;