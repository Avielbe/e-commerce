import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { LuScissorsSquareDashedBottom } from "react-icons/lu";

// Define constants
const LOGO_URL = "https://cdn-eu.dynamicyield.com/api/9879135/images/35fe435f20efa__shavot_new.gif";
const SEARCH_PLACEHOLDER = "חיפוש פריט או קטגוריה...";

// Extract repeated code into separate components
const Icon = ({ IconComponent, label }) => (
  <div className="flex items-center text-blue-900 hover:text-blue-400" aria-label={label}>
    <IconComponent className="h-8 w-8" />
  </div>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white flex items-center px-4 py-4 z-50 h-28">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center" style={{ position: 'relative' }}>
        {/* Logo */}
        <div style={{ position: 'absolute', right: '-50px' }} aria-label="Logo">
            <img src={LOGO_URL} alt="My Company Logo" className="h-20" />
        </div>        



        {/*Search bar */}
        <div style={{ position: 'absolute', right: '250px' }} className="rounded-full max-h-11 min-h-11 w-1/2 bg-white shadow-md flex px-3 py-2 border border-gray-300 border-3 shadow-xl items-center" >
        
            <input type="text" placeholder={SEARCH_PLACEHOLDER} className="w-full h-7 bg-white text-black focus:outline-none " />
            <button className="h-9 bg-blue-500 flex items-center space-x-1 hover:bg-blue-700 text-white px-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
                </svg>
                <span className="font-family-rubik!">חיפוש</span>
            </button>
         </div>

         {/* <div style={{ position: 'absolute', left: '10px' }} className='flex space-x-2 mx-0' label="threeIcon" > */}

        <div style={{ position: 'absolute', left: '10px' }} className='flex space-x-2 mx-0' label="threeIcon" >
        {/* Users */}
        <div className="flex items-center text-blue-900" aria-label="User">
            <span className="text-blue-900  hover:text-blue-400 font-family-rubik">אורח</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </div>

        {/* Coupon */}
        <Icon IconComponent={LuScissorsSquareDashedBottom} label="Coupon" />

        {/* Delivery */}
        <Icon IconComponent={CiDeliveryTruck} label="Delivery" />

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


// import React from 'react';
// import { CiDeliveryTruck } from "react-icons/ci";
// import { LuScissorsSquareDashedBottom } from "react-icons/lu";

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-100 flex justify-end items-center px-4 py-2 z-50">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div aria-label="Logo">
//             <img src="https://cdn-eu.dynamicyield.com/api/9879135/images/35fe435f20efa__shavot_new.gif" alt="Your Company Logo"
//              className="h-20" />
//         </div>

//         {/*Search bar */}
//         <div className="rounded-full  max-h-11 min-h-11 w-1/3 bg-white shadow-md flex px-3 py-2 border-3 shadow-xl items-center">
//             <input type="text" placeholder="חיפוש פריט או קטגוריה..." className="w-full h-7 bg-white text-black focus:outline-none" />
//             <button className=" h-9 bg-blue-500 flex items-center space-x-1 hover:bg-blue-700 text-white px-2 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
//                 </svg>
//                 <span className="font-family-rubik!">חיפוש</span>
//             </button>
//          </div>
      


//         {/* Users */}
//         <div className="flex items-center text-blue-900" aria-label="User">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//             </svg>
//             <span className="text-blue-900  hover:text-blue-400 font-family-rubik">אורח</span>
//         </div>
        

        

//         {/* Coupon section */}
//         <div className="flex items-center text-blue-900 hover:text-blue-400  space-x-2" aria-label="Coupon">
//             <LuScissorsSquareDashedBottom className="h-8 w-8"  />
//         </div>
        
//         {/* delivery */}
//         <div className='bold  text-blue-900 hover:text-blue-400' aria-label="Delivery">
//             <CiDeliveryTruck className="h-8 w-8" />
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden flex items-center">
//           <button className="text-gray-600 hover:text-gray-900">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

