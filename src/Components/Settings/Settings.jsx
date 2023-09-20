import React from 'react'
import './Settings.scss'
import AccountHeader from '../AccountHeader/AccountHeader'
function Settings() {
  return (
    <div className='Settings'>
        <div className="container">
          <AccountHeader/>
            <div className="itemsSettings">
                <h1 className='settings__title'>Settings</h1>
                <p className='settings__lan'>Language</p>
                <div className='translate'>English</div>
                <p className='text__translate'>Please enter your first name.</p>
                <h5 className='text__theme'>Theme</h5>
                
                <input id="dark-mode" class="toggle" type="checkbox" name="Dark mode" role="switch" value="on"/>
	           <label for="dark-mode" class="sr">Dark Mode</label>
	            <div class="curtain"></div>
	             <label for="dark-mode" class="sr">Dark Mode</label>
	             <div class="curtain"></div>
                <div className='line'></div>
                <button className='btn__save'>Save Changes</button>
            </div>
        </div>
    </div>
  )
}

export default Settings