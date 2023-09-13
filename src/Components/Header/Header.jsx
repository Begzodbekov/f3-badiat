import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../asests/img/logo.svg'

function Header() {
  return (
    <div className='Header'>
          <div className="container">
                    <div className="header_inner">
                              <nav className='nav'>
                                 <div className="logo">
                                    <Link><img src={logo} alt="img" /></Link>
                                 </div>
                                 <ul>
                                    <li>
                                        <Link>
                                            Bosh sahifa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/books'>
                                            
                                            Kitoblar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>  
                                            Nasr
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Nazm   
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Maqolalar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Forum
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                              login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                              
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