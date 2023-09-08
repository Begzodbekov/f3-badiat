import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../asests/img/logo.svg'

function Header() {
  return (
    <div className='Header'>
          <div className="container">
                    <div className="header_inner">
                              <nav>
                                 <div className="logo">
                                    <Link><img src={logo} alt="img" /></Link>
                                 </div>
                              </nav>
                    </div>
          </div>
    </div>
  )
}

export default Header