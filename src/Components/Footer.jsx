import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import './common.css'

function Footer() {
  return (
    <MDBFooter id='footer' bgColor='light' className='text-center text-lg-left'>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a style={{textDecoration:'none'}} className='text-dark' href='https://mdbootstrap.com/'>
        AutomaticNumberCount.com
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer