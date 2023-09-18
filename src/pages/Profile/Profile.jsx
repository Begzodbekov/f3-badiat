import React from 'react'
import './profile.scss'
import Security from '../../Components/Security/Security'

import { Form } from 'react-router-dom'
import ProfileD from '../../Components/ProfileD/ProfileD'

import Settings from '../../Components/Settings/Settings'


function Profile() {
  return (
    <div className='Profile'>
        <Security/>

        <ProfileD/>
        {/* <Profile/> */}
        <Settings/>

    </div>
  )
}

export default Profile