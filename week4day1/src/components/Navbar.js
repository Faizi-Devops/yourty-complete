import Dropdown from "./Dropdown";

const Navbar = () => {
    return <nav className='flex justify-between  items-center py-2 lg:px-14 px-4 md:px-14 '>
    <div className='flex justify-between items-center'>
      <div className='flex justify-between items-center gap-3'><img src="Logo.svg" alt="yorfee" /><span className='font-bold font text-white hover:cursor-pointer hover:text-gray-600'>YORFY</span></div>
        <ul className='lg:flex justify-between items-center gap-5 ml-6 hidden'>
          <li className=' flex text-gray-300  px-2 h-[24px] cursor-pointer font text-white hover:text-gray-600 font-bold'>Home <img src="drop.svg" alt="kuch" /></li>
          <li className='text-gray-300  px-2 h-[24px] cursor-pointer font text-white hover:text-gray-600'>NFT</li>
          <li className='text-gray-300  px-2 h-[24px] cursor-pointer font text-white hover:text-gray-600'>Roadmap</li>
          <li className='text-gray-300  px-2 h-[24px] cursor-pointer font text-white hover:text-gray-600'>About Us</li>
          <li className='text-gray-300  px-2 h-[24px] cursor-pointer font text-white hover:text-gray-600'>Contact Us</li>
          <li className='text-gray-300 flex  px-2 h-[24px] cursor-pointer font text-white hover:text-gray-600'>Pages <img src="drop.svg"  alt="kuch" /></li>
        </ul>
      </div>
    <div className='h-[3rem] flex justify-center items-center gap-2'>
      
      <div className="lg:hidden">
      <Dropdown/>
      </div>
      <button className='bg-blue-500 block h-full w-[7rem] rounded-lg font text-white'>Join Us</button>
    </div>
  </nav>
};

export default Navbar;