import React, { useContext, useState } from 'react';

import { FaBars, FaUserCircle } from 'react-icons/fa'
import { NavTitle } from '../titles/titles';
import { AppContext } from '../context/appContext';

function NavBar({sidebarToggle, setSidebarToggle}) {
   let {title} = useContext(AppContext)
    return (
        <nav className='bg-gray-800 px-4 py-2 flex justify-between'>
            <div className='flex items-center text-x1'>
                <FaBars className='text-white me-4 cursor-pointer'
                onClick={() => {setSidebarToggle(!sidebarToggle)}}/>
                <NavTitle name={title}/>
                {/* <span className='text-white font-semibold'>Heading</span> */}
            </div>
            <div className='relative'>
                <button className='text-white group'>
                    <FaUserCircle className='w-6 h-6 mt-1'/>
                    <div className='z-20 hidden absolute bg-white rounded-lg
                     shadow w-32 group-focus:block top-full right-0'>
                        <ul className='py-2 text-sm text-gray-950'>
                            <li><a href="">Profile</a></li>
                            <li><a href="">Setting</a></li>
                            <l1><a href="">Log Out</a></l1>
                        </ul>

                    </div>
                </button>

            </div>

        </nav>
    );
}

export default NavBar;