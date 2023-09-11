import React from 'react'
import './Signup.scss'
import signUp from '../../asests/img/signup.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup'>
     <div className="container">
      <div className="wrapper">
        <div className="left__wrapper">
          <img className='signup__img' src={signUp} alt="" />
        </div>
        <div className="right__wrapper">
          <h2 className='signup__tittle'>Sign up</h2>
          <p className='signup__info'>Already have an account? <Link>Sign in</Link> </p>
          <input className='first__inp' type="text" placeholder='First name' />
          <input className='sec__inp' type="text" placeholder='Last name' />
          <input className='phone__inp' type="text" placeholder='Phone' />
          <input className='email__inp' type="text" placeholder='Email' />
          <input className='passwor__inp' type="text" placeholder='Password' />
          <button>Next step</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Signup
