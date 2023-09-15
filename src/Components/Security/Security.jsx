import React from 'react'
import './Security.scss'
function Security() {
  return (
    <div className='Security'>
      <div className="container">
        <div className="content">
          <h3 className='Sec__title'>
            Change Or Recover Your Password:
          </h3>
          <br />
          <div className="part1">
            <span className='email.con'>
              <p className='email'>Email</p>
              <input type="text" className='Email.sec' />
              <p className='text__email'>Please enter your first name.</p>
            </span>
            <span className='Pass__con'>
              <p className='pass'>Current password</p>
              <input type="password" className='Password__sec' />
              <p className='text__pass'>Please enter your password.</p>
            </span>
          </div>
          <div className="part2">
            <span className='new__pass'>
              <p className='new__pass'>New password</p>
              <input type="password" className='New__password__inp' />
              <p className='text__new__pass'>Please enter your phone number.</p>
            </span>
            <span className='confr__pass__cont'>
              <p className='confr__pass'>Confrim password</p>
              <input type="password" className='confrim__password' />
              <p className='text__confr__pass'>Please enter your email address.</p>
            </span>
          </div>
          <button className='btn__security'>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default Security