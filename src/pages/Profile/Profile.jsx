import React from 'react'
import Security from '../../Components/Security/Security'
import Settings from '../../Components/Settings/Settings'

function Profile() {
  return (
    <div className='Profile'>
        <Security/>
        {/* <Profile/> */}
        <Settings/>
    </div>
  )
}

export default Profile