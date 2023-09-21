import React, { useContext, useState } from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../asests/img/logo.svg'
import { Context } from '../../Context/Context'

function Header() {
  const location = useLocation().pathname
  const [list, setList] = useState(0)
  const {ochilishi, setOchilishi} = useContext(Context)
  console.log(list);
  return (
    <div className={location ==='/signin' || location ==='/signup' || location ==='/account' || location ==='/security' ? 'Headers' :'Header'}>
        <div className="container">
                    <div className="header_inner">
                              <nav className='nav'>
                                 <div className="logo">
                                    <Link><img src={logo} alt="img" /></Link>
                                 </div>
                                 <ul className='nav__list'>
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
                                    <li  className={location =='/nasr' ?'active': null} >
                                        <Link to={'/nasr'}>  
                                            Nasr
                                        </Link>
                                    </li>
                                    <li  className={location == '/nazm'?'active': null}>
                                        <Link>
                                            Nazm   
                                        </Link>
                                    </li>
                                    <li  className={location == '/maqolalar'?'active': null}>
                                        <Link>
                                            Maqolalar
                                        </Link>
                                    </li>
                                    <li  className={location == '/forum'? 'active': null}>
                                        <Link>
                                            Forum
                                        </Link>
                                    </li>
                                    <li className={location !='/' ? 'logins li8': 'login li8'}>
                                        <Link to='/signin'>
                                              login
                                        </Link>
                                    </li>
                                   
                                    <li  className={location != '/'? 'logins li8': 'login li8'}>
                                        <Link to={'/signup'}>
                                              register
                                        </Link>
                                    </li>
                                    <li className={location !='/' ? 'odam': 'none'}>
                                        <Link to={'/profile'} >
                                              <img src="https://as1.ftcdn.net/v2/jpg/01/26/32/02/1000_F_126320234_AxO4v6wCAh4ZCKfQ9KbNH8YdBIA3XOQY.jpg" alt="" />
                                        </Link>
                                    </li>
                                    <li className={location !='/' ? 'odam': 'none'} >
                                        <div className='odam_list_test'>
                                           <div className='odam_list_testitem1'>
                                            <Link to={'/profile'}>Profile</Link> 
                                             <i onClick={()=> setOchilishi(!ochilishi)} class="bi bi-chevron-down odam_list_testarrow"></i>
                                           </div>
                                            <div className={ochilishi ==false? 'odam_list_testitem2' :'odam_list_test1item2'}>
                                                <Link to={'/account'}>Account</Link>
                                            </div>
                                        </div>
                                        {/* <select className='header_selection' name="select" id="">
                                           
                                             <option value="1"> <Link to={'/profile'}   >Profile </Link></option>
                                              <option value="2"> <Link> Account</Link></option>
                                        </select> */}
                                    </li>
                                 </ul>
                            </nav>
                    </div>
          </div>
    </div>
    
    )
}

export default Header