import React from 'react'
import './AccountHeader.scss'
import { Link } from 'react-router-dom'
function AccountHeader() {
  return (
    <div className='AccountHeader'>
        <div className="container">
        <div className="accountheader_inner">
            <div className="accountheader_top">
              <div className='accountheader_top_button1'>
                <Link to={'/account'}>
                  <span>1</span>
                  <h4>My account</h4>
                </Link>
              </div>
              <div className='accountheader_top_button2'>
              <Link to={'/security'}>
                <span>2</span>
                <h4>Security</h4>
                </Link>
              </div>
              <div className='accountheader_top_button3'>
              <Link to={'/settings'}>
                <span className='accountheader_span'>3</span>
                <span className='accountheader_span2'>
                    <h4>Make Payment</h4>
                    <h6>Add Payment Options</h6>
                </span>
                </Link>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AccountHeader