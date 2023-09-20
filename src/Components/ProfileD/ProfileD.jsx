import React, { useState } from 'react'
import './ProfileD.scss'
import profiled from '../../asests/img/profiled.img.svg'
import profiledCamera from '../../asests/img/profiled__camera.png'
import { Link } from 'react-router-dom'
import AccountHeader from '../AccountHeader/AccountHeader'
function ProfileD() {
  const [file, setFile] = useState();
  const handleFile =(e)=>{
    setFile(e.target.files[0])
  }
  // const handleApi =()=>{
  //   const formData = new FormData()
  //   formData.append('image', file)
  //   axios.post('url',formData)
  // }
  return (
    <div className="container">
      <div className='profiled__blog'>
        <AccountHeader/>
        <div className="profiled__left">
          <img className='profiled_img' src={profiled} alt="Hamid Olimjon" />
          <span className='ic'>
            <i class="bi bi-camera iconss" name='file' onChange={handleFile}></i>
            {/* <Link> */}
              {/* <img  src={profiledCamera} alt="img" /> */}
            {/* </Link> */}
            <input className='profiled__inp-file' type="file"  name='file' onChange={handleFile} 
             />
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
