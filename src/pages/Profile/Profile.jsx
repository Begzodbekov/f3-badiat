import React from 'react'
import './profile.scss'
import Security from '../../Components/Security/Security'
import { Form } from 'react-router-dom'
import ProfileD from '../../Components/ProfileD/ProfileD'

function Profile() {
  return (
    <div className='Profile'>
        <Security/>
        <ProfileD/>
    </div>
  )
}

export default Profile