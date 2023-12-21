// import React, { useState } from 'react';
import React, { useState, useEffect, useRef } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
        type="button"
      >
        <img src="menu.svg" alt="menu" className="" />
      </button>

      <div
        id="dropdown"
        className={`${
          isOpen ? 'block' : 'hidden'
        } z-10 bg-[#051139] opacity-4 border divide-y divide-gray-100 mt-[10px] absolute rounded-lg shadow w-30 dark:bg-gray-700`}
      >
        <ul
          className=" text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            className="block px-1 py-0 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeDropdown} // Close dropdown on link click
          >
             <li className="block flex px-4 py-2 font text-white hover:bg-gray-100 font-bold dark:hover:bg-gray-600 dark:hover:text-white">Home<img src="drop.svg" alt="kuch" /></li>
          <li className="block px-4 py-2 font text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NFT</li>
           <li className="block px-4 py-2 font text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Roadmap</li>
          <li className="block px-4 py-2 font text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Us</li>
          <li className="block px-4 py-2 font text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact Us</li>
          <li className="block flex px-4 py-2 font text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pages<img src="drop.svg" alt="kuch" /></li>
          
            
          </li>
          
          {/* Other list items */}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;




// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div >
//       <button
//         id="dropdownDefaultButton"
//         onClick={toggleDropdown}
//         className="text-white  hover:bg-blue-800    font-medium rounded-lg text-sm px-2  py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
//         type="button"
//       >
//         <img src="menu.svg" alt="menu" className="" />
        
//       </button>

//       <div
//         id="dropdown"
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } z-10 bg-white opacity-4 border divide-y divide-gray-100  mt-[10px] absolute rounded-lg shadow w-28 dark:bg-gray-700`}
//       >
//         <ul
//           className="py-2 text-sm text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownDefaultButton"
//         >
//           <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</li>
//           <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NFT</li>
//           <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Roadmap</li>
//           <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Us</li>
//           <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact Us</li>
//           <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pages</li>
          
         
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
