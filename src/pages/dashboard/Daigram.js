import { useState } from 'react'
import Home from './compnents/home'

function DashApp() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div>
        <Home />
    </div>
  )
}

export default DashApp
