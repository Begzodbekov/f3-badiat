import React, { useState } from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../asests/img/logo.svg'

function Header() {
  const [active , setActive]= useState(0)
  const location = useLocation().pathname
  const [list, setList] = useState(0)
  console.log(list);
  return (
    <div className={location ==='/signin' || location ==='/signup' || location ==='/account' ? 'Headers' :'Header'}>
        <div className="container">
                    <div className="header_inner">
                              <nav className='nav'>
                                 <div className="logo">
                                    <Link><img src={logo} alt="img" /></Link>
                                 </div>
                                 <ul>
                                    <li onClick={()=>setActive(1)} className={active == 1?'active': null}>
                                        <Link to={'/'}>
                                            Bosh sahifa
                                        </Link>
                                    </li>

                                    <li onClick={()=>setActive(2)} className={active == 2?'active': null}>
                                        <Link to='/books'>

                                            Kitoblar
                                        </Link>
                                    </li>
                                    <li onClick={()=>setActive(3)} className={active == 3?'active': null} >
                                        <Link to={'/nasr'}>  
                                            Nasr
                                        </Link>
                                    </li>
                                    <li onClick={()=>setActive(4)} className={active == 4?'active': null}>
                                        <Link>
                                            Nazm   
                                        </Link>
                                    </li>
                                    <li onClick={()=>setActive(5)} className={active == 5?'active': null}>
                                        <Link>
                                            Maqolalar
                                        </Link>
                                    </li>
                                    <li onClick={()=>setActive(6)} className={active == 6?'active': null}>
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
                                    <li className={location !='/' ? 'odam': 'none'}>
                                        <Link to={'/profile'} >
                                              <img src="https://as1.ftcdn.net/v2/jpg/01/26/32/02/1000_F_126320234_AxO4v6wCAh4ZCKfQ9KbNH8YdBIA3XOQY.jpg" alt="" />
                                        </Link>
                                    </li>
                                    <li className={location !='/' ? 'odam': 'none'} >
                                        <div className='odam_list_test'>
                                           <div className='odam_list_testitem1'>
                                            <Link to={'/profile'}>Profile</Link> 
                                             <i onClick={()=>setList(1)} class="bi bi-chevron-down odam_list_testarrow"></i>
                                           </div>
                                            <div className={list ==1? 'odam_list_testitem2' :'odam_list_test1item2'}>
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