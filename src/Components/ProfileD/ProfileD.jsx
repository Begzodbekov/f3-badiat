import React, { useContext, useRef, useState } from 'react'
import './ProfileD.scss'
import { Link } from 'react-router-dom'
import AccountHeader from '../AccountHeader/AccountHeader'
import { Context } from '../../Context/Context'
function ProfileD() {

  const inputRef = useRef(null)
  const {image, setImage}= useContext(Context)
  const handleimageclick = ()=>{
    inputRef.current.click()
  }
  const handleimageChange = (event)=>{
    const file = event.target.files[0]
    console.log(file);
    setImage(event.target.files[0])
  }
  return (
    <div className="container">
      <div className='profiled__blog'>
        <AccountHeader/>
        <div className="profiled__left">
          <span className='ic'>
            <i class="bi bi-camera iconss" name='file' onClick={handleimageclick}></i>
            {
              image? <img className='profiled_img_after' src={URL.createObjectURL(image)} alt="Hamid Olimjon" />: <img className='profiled_img_before' src="https://as1.ftcdn.net/v2/jpg/01/26/32/02/1000_F_126320234_AxO4v6wCAh4ZCKfQ9KbNH8YdBIA3XOQY.jpg" alt="Hamid Olimjon" />
                
            }
            <input type="file" onChange={handleimageChange} style={{display:"none"}} ref={inputRef} />
          </span>
        </div>
        <div className="profiled__right">
          <div className="profiled__part1">
            <h1>My profile</h1> 
            <h4>First Name</h4>
            <input type="text" placeholder='John' />
            <p>Please enter your first name.</p>
          </div>
          <div className="profiled__part2">
            <h4>Last Name</h4>
            <input type="text" placeholder='Wick' />
            <p>Please enter your last name.</p>
          </div>
          <div className="profiled__part3">
            <div className='prf__left'>
              <h4>Phone</h4>
              <input type="text" placeholder='+61412345678'/>
              <p>Please enter your  phone number.</p>
            </div>
            <div className="prf__right">
              <h4>Email</h4>
              <input type="text" placeholder='john.wick@reeves.com' />
              <p>Please enter your email address.</p>
            </div>
          </div>
          <div className="line"></div>
          <button className='prf__button'>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileD
