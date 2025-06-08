import React from 'react'
import logo from "../images/logo.svg"

const Header = () => {
  return (
    <div className='header-cont'>
        <img src={logo} alt="logo" />
        <h1>Chef Claude</h1>
    </div>
  )
}

export default Header