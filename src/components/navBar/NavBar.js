import React from 'react'
import Logo from '../../resources/Icon2Small.png'
import {StyledNav} from './StyledNavBar'

export default function NavBar() {
  var prevScrollpos = window.pageYOffset;
  var [top, setTop] = React.useState('0');
  // var top = 0;
  window.onscroll  = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setTop('0');
    } else {
      setTop('-5rem')
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    // <StyledNav className={visible? 'visible' : 'hidden'} >
    <StyledNav top={top} color="red">
      <div>
      <a href='#home'> 
        <img id="logo" src={Logo} width="50" height="45" className="d-inline-block align-top" alt="Matias Stefanutti" />
      </a>
      </div>

      <ul>
        {/* <li> Home </li> */}
        <li  > <a href='#about'>About me</a> </li>
        <li> <a href='#projects'>Work</a> </li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>      
  
    </StyledNav>
  )
}
