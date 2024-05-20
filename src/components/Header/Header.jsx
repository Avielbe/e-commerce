import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-400 flex justify-end items-center px-4 py-2 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
        <img src="https://cdn-eu.dynamicyield.com/api/9879135/images/1a1dbedbbaaec__summer_logo_july.gif" alt="Your Company Logo"
         className="h-10 mr-4" />
        </div>

        {/*Search bar */}
        <div class="rounded-full bg-white shadow-md flex px-3 py-2 items-center">
            <input type="text" placeholder="Search..." class="w-full focus:outline-none" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-full">
                <h7>חיפוש</h7>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
                </svg>
            </button>
         </div>
         <div className="flex items-center">
          <input type="text" placeholder="Search" className="rounded-full px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring focus:border-blue-300" />
          <button className="bg-blue-600 text-white rounded-full px-4 py-2 ml-2 hover:bg-blue-700">Search</button>
        </div>


        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        
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

        {/* Users */}
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-white hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7-7v8l4-4z" />
            </svg>
            <span class="text-white hover:text-blue-500">Guest</span>
        </div>
        /
                  {/* Coupon section */}
                  <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 fill-current text-white hover:text-blue-300" viewBox="0 0 20 20">
              <path d="M17 2h-4a1 1 0 000 2h3v14H4V4h3a1 1 0 100-2H3a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1z"/>
            </svg>
            <span className="text-sm">Coupons</span>
          </div>
        {/* delivery */}
        <div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-white hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            </svg>
            <span class="text-white hover:text-blue-500">Delivery</span>
        </div>
        <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 fill-current text-white hover:text-blue-300" viewBox="0 0 20 20">
              <path d="M14 3h2v2h-2V3zm-4 0h2v2h-2V3zM5 7h10v9a1 1 0 01-1 1H6a1 1 0 01-1-1V7zm2 2H7v2h2V9zm4 0h-2v2h2V9zm-4 4H7v2h2v-2z"/>
            </svg>
            <span className="text-sm">Delivery</span>
          </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
