const Discount = () =>{
    return(
        <div>
        <div className="bg-[#AA00FF]">
            <div className="lg:px-[20px] px-[1rem] md:px-[2.5rem] container mx-auto  py-[24px]">

            
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2">
                <p data-aos="zoom-in" className="font text-center lg:text-[2rem] md:text-[1rem] text-[1rem]  text-white">Discount Sale</p>
                <p data-aos="zoom-in" className="font text-center lg:text-[2rem] md:text-[1rem] text-[1rem]  text-white text-stroke">Up to 40%</p>
                <p data-aos="zoom-in" className="font text-center lg:text-[2rem] md:text-[1rem] text-[1rem] hidden md:block text-white">Discount Sale</p>
                <p data-aos="zoom-in" className="font text-center lg:text-[2rem] md:text-[1rem] text-[1rem] hidden md:block text-white text-stroke">Up to 40%</p>

            </div>
            </div>




        </div>
        </div>
    )
}
export default Discount;