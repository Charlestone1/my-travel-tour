import React from 'react'
import {FaGlobeAmericas} from "react-icons/fa"

const NavBar = () => {
  return (
    <div className="nav_container">
      <span className='nav_globe'><FaGlobeAmericas/></span>
      <p>my travel journal.</p>
    </div>
  )
}

export default NavBar