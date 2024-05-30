// import React, { useState }from 'react';
// import NavBar from './NavBar';
// import SideBar from './SideBar';

// function DashBoard(props) {
//     const [sidebarToggle, setSidebarToggle] = useState(true)
//     return (
//         <div className='fixed w-full'>
//             <NavBar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
//             <SideBar sidebarToggle={sidebarToggle}/>
//         </div>
//     );
// }

// export default DashBoard;
import React, { useState, useRef, useEffect } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

function DashBoard(props) {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    
    // Function to close sidebar when clicked outside
    const closeSidebar = () => {
        setSidebarToggle(true); 
    };


    // Function to toggle sidebar when button is clicked
    const toggleSidebar = () => {
        setSidebarToggle(prevState => !prevState); // Toggle the sidebar state
        
    };
    console.log(sidebarToggle)
    
    // Ref for sidebar
    const sidebarRef = useRef(null);

    // Effect to add event listener when component mounts
    useEffect(() => {
        // Function to handle click outside
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeSidebar(); // Call closeSidebar function when clicked outside
            }
        };

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Empty dependency array means this effect runs only once when component mounts

    return (
        <div className='fixed w-full'>
            <NavBar sidebarToggle={sidebarToggle} setSidebarToggle={toggleSidebar}/>
            <div ref={sidebarRef}>
                <SideBar sidebarToggle={sidebarToggle}/>
            </div>
        </div>
    );
}

export default DashBoard;
