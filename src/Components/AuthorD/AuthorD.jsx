import React from 'react'
import AuthorImg1 from '../../asests/img/AuthorImg1.png'
import './AuthorD.scss'
function AuthorD() {
  return (
    <div className='AuthorD'>
        <div className="container">
          <div className="Author__body">
          <div className="container__left">
                <img className='img1' src={AuthorImg1 } alt="" />
                <div className="left__text">
                  <p className='left__text1'>Tavallud sanasi</p>
                  <h1 className='left__text2'>5-Avg 1941</h1>
                  <p className='left__text3'>Toshkent, Uzbekistan</p>
                </div>
            </div>
            <div className="container__right">

            </div>
          </div>

        </div>

    </div>
  )
}

export default AuthorD