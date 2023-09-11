import React from 'react'
import './Signin.scss'
import signIn from '../../asests/img/signin.svg'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='signin'>
      <div className="container">
        <div className="inner">
          <div className="left__inner">
            <img className='signin__img' src={signIn} alt="" />
          </div>
          <div className="right__inner">
            <h2 className='signin__tittle'>Sign in</h2>
            <p className='signin__info'>Do not you have an account?<Link> Sign up</Link></p>
            <input className='email__inp' type="text" placeholder='Email' />
            <input className='pas__inp' type="text" placeholder='Password' />
            <button className='signin__btn'>Next step</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
