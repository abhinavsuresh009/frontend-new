import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

 function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
      <aside id="sidebar" className={`w-full md:w-64 h-full bg-blue-950 shadow shadow-white overflow-y-auto transition-all duration-500 ease-in-out ${openSidebarToggle ? "sidebar-responsive" : ""}`}>
        <div className="flex justify-between items-center p-6 mb-8">
          <div className="text-xl font-bold flex items-center">
            <BsCart3 className="mr-2" /> Chemm Finance
          </div>
          <span className="cursor-pointer text-white lg:hidden" onClick={OpenSidebar}>X</span>
        </div>
  
        <ul className="list-none p-0">
          <li className="p-5 text-lg hover:bg-gray-600 cursor-pointer">
            <a href="#" className="flex items-center text-gray-400 no-underline">
              <BsGrid1X2Fill className="mr-2" /> Dashboard
            </a>
          </li>
          <li className="p-5 text-lg hover:bg-gray-600 cursor-pointer">
            <a href="#" className="flex items-center text-gray-400 no-underline">
              <BsFillArchiveFill className="mr-2" /> Products
            </a>
          </li>
          <li className="p-5 text-lg hover:bg-gray-600 cursor-pointer">
            <a href="#" className="flex items-center text-gray-400 no-underline">
              <BsFillGrid3X3GapFill className="mr-2" /> Categories
            </a>
          </li>
          <li className="p-5 text-lg hover:bg-gray-600 cursor-pointer">
            <a href="#" className="flex items-center text-gray-400 no-underline">
              <BsPeopleFill className="mr-2" /> Customers
            </a>
          </li>
          <li className="p-5 text-lg hover:bg-gray-600 cursor-pointer">
            <a href="#" className="flex items-center text-gray-400 no-underline">
              <BsListCheck className="mr-2" /> Inventory
            </a>
          </li>
          <li className="p-5 text-lg hover:bg-gray-600 cursor-pointer">
            <a href="#" className="flex items-center text-gray-400 no-underline">
              <BsMenuButtonWideFill className="mr-2" /> Reports
            </a>
          </li>
          <li className="p-5 text-lg hover:bg-gray-600 cursor-pointer">
            <a href="#" className="flex items-center text-gray-400 no-underline">
              <BsFillGearFill className="mr-2" /> Setting
            </a>
          </li>
        </ul>
      </aside>
    );
  }
  
  export default Sidebar;