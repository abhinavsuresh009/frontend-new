import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

 function Header({ OpenSidebar }) {
    return (
      <header className="h-16 flex items-center justify-between px-8 shadow-lg lg:justify-end">
        <div className="lg:hidden">
          <BsJustify className="h-7 w-7" onClick={OpenSidebar} />
        </div>
        <div className="flex">
          <BsFillBellFill className="h-6 w-6 mr-2" />
          <BsFillEnvelopeFill className="h-6 w-6 mr-2" />
          <BsPersonCircle className="h-6 w-6 " />
        </div>
      </header>
    );
  }
  
  export default Header;