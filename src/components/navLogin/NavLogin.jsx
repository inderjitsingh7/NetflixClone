import React from 'react'
import './NavLogin.css'
import { RiEnglishInput } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import NLogo from '../../img/Netflix_Logo.png'

const NavLogin = () => {

  const go = useNavigate()

  function handelClick(){
    go('/LoginSignin')
  }



  return (
    <div className='NavLogin-Cont'>

      <div className='nav-items-cont'>

        {/* Logo */}
        <div className='Nav-Logo-cont'>
          <img className='NavLogo' src={NLogo} alt="" />
        </div>

        {/* Btn */}
        <div className='Nav-btn-cont'>

          {/* Eng Btn */}
          <div className='eng-btn'>
            <RiEnglishInput/>
            <p>English</p>
          </div>

          {/* SignIn Btn */}

          <div onClick={handelClick} className='sign-in-btn'>
            <p>Sign in</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default NavLogin