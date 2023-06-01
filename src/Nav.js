import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {  
  

  return (
    <div className="nav">
      <img
      className='nav__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png'
      alt='netflix Logo'
       />

       <img 
       className='nav__avatar'
       src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
       alt='avatar logo'/>
    </div>


  )
}

export default Nav