import React from 'react';
import { useNavigate, useLocation } from "react-router-dom"

function SideBar({sidebarToggle}) {
    let {pathname} = useLocation()
    let menuBgColor = 'bg-gray-700'
    let page_url = pathname.split('/')?.[1]
    const navigate = useNavigate();
    function activeLink(type=null){
       
        if(type===page_url){
            return true
        }else{
            return false
        }

    }
    return (
        <div className={` bg-gray-800 z-20 fixed h-full duration-500 ${sidebarToggle?'w-0':'w-64'} `}>
            {/* <div className='my-2 mb-4'>
                <h1 className='text-2x text-white font-bold'>Dashboard</h1>
            </div> */}
            
            <ul className={`'mt-3 text-white text-sm duration-500 ${sidebarToggle && 'scale-0'}`}>
                <li className={`ps-5 cursor-pointer hover:shadow hover:bg-gray-700 py-2 ${activeLink('customer') && menuBgColor}`} onClick={()=>navigate('/customer')}>
                    Customer
                </li>
                
                <li className={`ps-5 cursor-pointer hover:shadow hover:${menuBgColor} py-2 ${activeLink('register') && menuBgColor}`} onClick={()=>navigate('/register')}>
                 User
                </li>
                <li className={`ps-5 cursor-pointer hover:shadow hover:${menuBgColor} py-2 ${activeLink('company') && menuBgColor}`} onClick={()=>navigate('/company')}>
                   Company
                </li>
                <li className={`ps-5 cursor-pointer hover:shadow hover:${menuBgColor} py-2 ${activeLink('branch') && menuBgColor}`} onClick={()=>navigate('/branch')}>
                   Branch
                </li>
                <li className={`ps-5 cursor-pointer hover:shadow hover:${menuBgColor} py-2 ${activeLink('goldloan') && menuBgColor}`} onClick={()=>navigate('/goldloan')}>
                   Gold Loan
                </li>
                <li className={`ps-5 cursor-pointer hover:shadow hover:${menuBgColor} py-2 ${activeLink('goldrate') && menuBgColor}`} onClick={()=>navigate('/goldrate')}>
                   Gold Rate
                </li>
                <li className={`ps-5 cursor-pointer hover:shadow hover:${menuBgColor} py-2 ${activeLink('daybook') && menuBgColor}`} onClick={()=>navigate('/daybook')}>
                   DayBook
                </li>
                <li className={`ps-5 cursor-pointer hover:shadow hover:${menuBgColor} py-2 ${activeLink('payment') && menuBgColor}`} onClick={()=>navigate('/payment')}>
                  Payment
                </li>
                <li className={`ps-5 cursor-pointer hover:shadow hover:${menuBgColor} py-2 ${activeLink('reset-password') && menuBgColor}`} onClick={()=>navigate('/reset-password')}>
                  Change Password
                </li>
            

            </ul>
            
        </div>
    );
}

export default SideBar;