import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
    <nav>Welcome To Your Daily Goals</nav>
    <div className='header'>
      <Link to="/">Home</Link>
      {/* <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link> */}
    </div>
    </>
  )
}

export default Header
