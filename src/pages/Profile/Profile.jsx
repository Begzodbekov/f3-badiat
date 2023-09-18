import React from 'react'
import './profile.scss'
import Security from '../../Components/Security/Security'
<<<<<<< HEAD
import { Form } from 'react-router-dom'
import ProfileD from '../../Components/ProfileD/ProfileD'
=======
import Settings from '../../Components/Settings/Settings'
>>>>>>> d118f4cf534277989c2d7c1eafab6a594a2db90c

function Profile() {
  return (
    <div className='Profile'>
        <Security/>
<<<<<<< HEAD
        <ProfileD/>
=======
        {/* <Profile/> */}
        <Settings/>
>>>>>>> d118f4cf534277989c2d7c1eafab6a594a2db90c
    </div>
  )
}

export default Profile