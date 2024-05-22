import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { LuScissorsSquareDashedBottom } from "react-icons/lu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-400 flex justify-end items-center px-4 py-2 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div aria-label="Logo">
            <img src="https://cdn-eu.dynamicyield.com/api/9879135/images/35fe435f20efa__shavot_new.gif" alt="Your Company Logo"
             className="h-20" />
        </div>

        {/*Search bar */}
        <div className="rounded-full  max-h-11 min-h-11 w-1/3 bg-white shadow-md flex px-3 py-2 border-3 shadow-xl items-center">
            <input type="text" placeholder="חיפוש פריט או קטגוריה..." className="w-full h-7 bg-white text-black focus:outline-none" />
            <button className=" h-9 bg-blue-500 flex items-center space-x-1 hover:bg-blue-700 text-white px-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
                </svg>
                <span className="font-family-rubik!">חיפוש</span>
            </button>
         </div>
         {/* <div className="flex items-center">
          <input type="text" placeholder="Search" className="rounded-full px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring focus:border-blue-300" />
          <button className="bg-blue-600 text-white rounded-full px-4 py-2 ml-2 hover:bg-blue-700">Search</button>
        </div> */}


        {/* Users */}
        <div className="flex items-center" aria-label="User">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span className="text-white  hover:text-blue-500 font-family-rubik">אורח</span>
        </div>
        

        

        {/* Coupon section */}
        <div className="flex items-center space-x-2" aria-label="Coupon">
            <LuScissorsSquareDashedBottom />
        </div>
        
        {/* delivery */}
        <div aria-label="Delivery">
            <CiDeliveryTruck />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;



        {/* Navigation */}
        {/* <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav> */}
        
        {/* Icons */}
        {/* <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 3v1a3 3 0 006 0V3m-6 18a3 3 0 006 0M4 3h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2z" />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M4 6h16M4 6a2 2 0 002-2M4 6a2 2 0 01-2 2M20 6a2 2 0 002-2M20 6a2 2 0 01-2 2M4 12h16m-2 4h.01m-4 4h.01M4 12a2 2 0 012-2m0 4a2 2 0 002-2m0 4a2 2 0 002-2m0 4a2 2 0 002-2m0 4a2 2 0 002-2m0 4a2 2 0 002-2" />
            </svg>
          </button>
        </div> */}