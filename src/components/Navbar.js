import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import wc from './2023_CWC_Logo.svg.png'

function Navbar() {
  return (
    <div className='navbar' >
      <div className='p'>
      <img  style={{width:'80px',height:'50px',paddingTop:'3px'}} src={wc}/>
      <p><Link  style={{textDecoration:'none' ,color:'white'}} to='/'>ICC WC 2023</Link></p>
      </div>
      
    
     <ul>
      <li><Link style={{textDecoration:'none',color:'white'}} to='/scorepage'>score page</Link></li>
      <li> <Link style={{textDecoration:'none',color:'white'}} to='/popularplayer'>Popular player</Link></li>
      <li><Link style={{textDecoration:'none',color:'white'}} to='/about'>About us</Link></li>
      <li><Link style={{textDecoration:'none',color:'white'}} to='/contact'>Contact us</Link></li>
     </ul>
    </div>
   
  )
}

export default Navbar
