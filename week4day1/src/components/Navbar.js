
const Navbar = () => {
    return <nav className='flex justify-between  items-center py-2 px-5 container mx-auto'>
    <div className='flex justify-between items-center'>
      <div className='flex justify-between items-center gap-3'><img src="Logo.svg" alt="yorfee" /><span className='font-bold font text-white'>YORFY</span></div>
        <ul className='lg:flex justify-between items-center gap-5 ml-6 hidden'>
          <li className=' flex text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer font text-white font-bold'>Home <img src="drop.svg" alt="kuch" /></li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer font text-white'>NFT</li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer font text-white'>Roadmap</li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer font text-white'>About Us</li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer font text-white'>Contact Us</li>
          <li className='text-gray-300 flex hover:text-white px-2 h-[24px] cursor-pointer font text-white'>Pages <img src="drop.svg" alt="kuch" /></li>
        </ul>
      </div>
    <div className='h-[3rem] flex justify-center items-center gap-2'>
      <img src="menu.svg" alt="menu" className="block h-[35px] md:block lg:hidden sm:hidden" />
      <button className='bg-blue-500 block h-full w-[7rem] rounded-lg font text-white'>Join Us</button>
    </div>
  </nav>
};

export default Navbar;