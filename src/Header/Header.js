import React from 'react'
import { Link } from 'react-router-dom'
// import { CiSearch } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <>
      <div className="container">
        <div className='left-nav'>
          <div className='logo-img'>
            <img src="../images/logo.png" className=' logo' alt="" />
          </div>
          <div className='nav-item'>
            <span className='n-item'>Home</span>
            <span className='n-item'>Gift</span>
            {/* <span><Link to="/gift">Gift</Link> </span> */}
            <span className='n-item'>Order </span>
            <span className='n-item'>Pay</span>
            <span className='n-item'>Store</span>
          </div>
        </div>


        <div className='right-nav'>

          <div className='search-bar'>
            <input type="text" placeholder='looking for something specific' />
            {/* <CiSearch /> */}
          </div>
          <div className='dp-icon'>
          {/* <CgProfile /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header