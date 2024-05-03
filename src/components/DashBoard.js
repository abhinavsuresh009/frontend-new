import React, { useState }from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

function DashBoard(props) {
    const [sidebarToggle, setSidebarToggle] = useState(true)
    return (
        <div className=''>
           
            <NavBar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
            <SideBar sidebarToggle={sidebarToggle}/>
            
        </div>
    );
}

export default DashBoard;