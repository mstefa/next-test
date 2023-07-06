'use client';
import React, { useEffect } from 'react'
import styles from './navBar.module.scss'
import Image from 'next/image'

export default function NavBar() {
  const [hideNavBar, setHideNavBar] = React.useState(false);
  
  useEffect(() => {
    
    let prevScrollpos = window.scrollY;

    const hideAndShowNavBar = () => {
      let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          setHideNavBar(false);
        } else {
          setHideNavBar(true)
        }
        prevScrollpos = currentScrollPos;
    }

    window.addEventListener("scroll", hideAndShowNavBar, true);
    return window.removeEventListener("scroll", hideAndShowNavBar);
  }, []);

  return (

    <nav className={ hideNavBar? styles.navBarHidden: styles.navBar}>
      <div>
      <a href='#home'> 
        <Image className={ styles.logo}id="logo" width="50" height="45" alt="Matias Stefanutti" src='/Icon2Small.png' />
      </a>
      </div>

      <ul>
        {/* <li> Home </li> */}
        <li  > <a href='#about'>About me</a> </li>
        <li> <a href='#projects'>Work</a> </li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>      
  
    </nav>
  )
}
