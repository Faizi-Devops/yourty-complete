import Discount from "./Discount";
import Navbar from "./Navbar";

const Section = () => {
    return( <div className="backimage">
    <Navbar />
    <div className='flex justify-start  items-center gap-10 sm:gap-0 flex-col sm:flex-row pt-10  md:my-5 sm:my-3 md:px-14  px-[1rem]'>
      
    
    <div className='flex-1 flex flex-col justify-end items-end h-[490px] sm:h-[530px] sm:w-[50%]'>
      <div className="mx-auto flex flex-col justify-between items-around h-full lg:w-full gap-5 sm:gap-0">
        <h1 className=' font-semibold text-base lg:text-[1rem] md:text-[1rem] text-[#5699FF] sm:text-[1.5rem] text-[1rem]  w-[90%]'>Welcome to yorfy</h1>
        <div className='font-bold tracking-wider xl:leading-[5rem] md:leading-[3rem] xl:text-[3.5rem] font sm:text-[2rem] text-start text-[1.5rem]  text-white leading-[50px]'>Now Available,<br />Meet Yorfy NFT<br />Collection ⭐️</div>
        <div className='md:text-[0.9rem] text-[0.8rem] font-normal font px-0  tracking-wide leading-8 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br className="hidden xl:block" />eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div className='flex sm:justify-start justify-between items-center md:h-[90px] sm:h-[60px] h-[80px] gap-5'>
        <div className="">
          <p className='text-[2rem] md:text-[2.5rem] text-[2rem] text-start text-white font-bold font'>546</p>
          <p className='text-start md:text-[1rem] sm:text-base text-[0.75rem] font-light font text-white'>NFT Items</p>
        </div>
        <div className='h-full border-r-2 border-gray-300 '></div>
        <div className="">
          <p className='text-[2rem] md:text-[2.5rem] text-[2rem] text-start font-bold font text-white'>42</p>
          <p className='text-start md:text-[1rem] sm:text-base text-[0.75rem] font-light font text-white'>Owners</p>
        </div>
        <div className='h-full border-r-2'></div>
        <div className="">
          <p className='text-[2rem] md:text-[2.5rem] text-start  font-bold font text-white'>378</p>
          <p className='text-start md:text-[1rem] sm:text-base text-[0.75rem] font-light text-white font'>Items Sold</p>
        </div>
      </div>
      </div>
    </div>
    {/* 2 */}
    <div className='sm:flex-1 sm:flex sm:justify-end sm:items-end h-[530px] sm:h-[530px]  sm:w-[50%] w-full'>
      <div className="w-full h-full flex justify-end items-end relative sm:w-[90%]">
      <div className='h-[370px] w-[90%] xl:h-[368px] md:h-[300px] h-[330px] bg-slate-300 absolute top-[0%] left-[50%] translate-x-[-50%] rounded-lg'>
          <img className='block h-full w-full' src="teeth.png" alt="faces" />
        </div>
      <div className="border-blue-600 border-2 rounded-lg h-52  lg:h-[256px] h-[250px] md:h-[300px] kuch w-full">
        <div className='flex flex-col justify-end items-center lg:justify-center lg:items-end gap-5 h-full p-5 lg:flex-row sm:flex-col sm:justify-end sm:items-center'>  
          <button className='hover:bg-inherit hover:border bg-blue-500 block h-[48px] sm:w-[214px] w-full rounded-lg font text-white'>Buy an open sea</button>
          <button className='hover:bg-blue-500 hover:border-none border block h-[48px] sm:w-[214px] w-full rounded-lg font text-white'>Know more</button>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div className="pt-10">
  <Discount />
  
  </div>
  </div>
    )
};

export default Section;