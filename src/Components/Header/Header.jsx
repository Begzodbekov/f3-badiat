import React, { useState } from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../asests/img/logo.svg'

function Header() {
  const location = useLocation().pathname
  return (
    <div className={location =='/login'?'Headers' :'Header'}>
        <div className="container">
                    <div className="header_inner">
                              <nav className='nav'>
                                 <div className="logo">
                                    <Link><img src={logo} alt="img" /></Link>
                                 </div>
                                 <ul>
                                    <li  className={location == '/'?'active': null}>
                                        <Link to={'/'}>
                                            Bosh sahifa
                                        </Link>
                                    </li>

                                    <li  className={location == "/books"?'active': null}>
                                        <Link to='/books'>

                                            Kitoblar
                                        </Link>
                                    </li>
                                    <li  className={location == 3?'active': null} >
                                        <Link to={'/nasr'}>  
                                            Nasr
                                        </Link>
                                    </li>
                                    <li  className={location == 4?'active': null}>
                                        <Link>
                                            Nazm   
                                        </Link>
                                    </li>
                                    <li  className={location == 5?'active': null}>
                                        <Link>
                                            Maqolalar
                                        </Link>
                                    </li>
                                    <li  className={location == 6?'active': null}>
                                        <Link>
                                            Forum
                                        </Link>
                                    </li>
                                    <li className={location !='/' ? 'logins': 'login'}>
                                        <Link to='/signin'>
                                              login
                                        </Link>
                                    </li>
                                    <li  className={location !='/signin' && '/' && 'signup' ? 'logins': 'login'}>
                                        <Link to={'/signin'}>
                                              login
                                        </Link>
                                    </li>
                                    <li  className={location != '/'? 'logins': 'login'}>
                                        <Link to={'/signup'}>
                                              register
                                        </Link>
                                    </li>
                                    {/* <li className={location !='/' ? 'odam': 'none'}>
                                        <Link to={'/account'} >
                                              <img src="https://as1.ftcdn.net/v2/jpg/01/26/32/02/1000_F_126320234_AxO4v6wCAh4ZCKfQ9KbNH8YdBIA3XOQY.jpg" alt="" />
                                        </Link>
                                    </li> */}
                                    <li className={location !='/' ? 'odam': 'none'} >
                                        <Link>
                                              F3-Team
                                        </Link>
                                    </li>
                                 </ul>
                            </nav>
                    </div>
          </div>
    </div>
    
    )
}

export default Header