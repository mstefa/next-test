'use client';
import React, { useEffect } from 'react'
import styles from './navBar.module.scss'
import Image from 'next/image'
import { Icon } from '../icon/Icon';

export default function NavBar() {
  const [hideNavBar, setHideNavBar] = React.useState(false);
  const [isNavExpanded, setIsNavExpanded] = React.useState(false)
  
  useEffect(() => {
    
    let prevScrollpos = window.scrollY;

    const hideAndShowNavBar = () => {
      let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          setHideNavBar(false);
        } else {
          setHideNavBar(true)
          setIsNavExpanded(false)
        }
        prevScrollpos = currentScrollPos;
    }

    window.addEventListener("scroll", hideAndShowNavBar, true);
    return window.removeEventListener("scroll", hideAndShowNavBar);
  }, []);

  return (

    <nav className={ hideNavBar? styles.navBarHidden: styles.navBar}>
      <div className={styles.logoDiv}>
      <a href='#home'> 
        <Image className={ styles.logo}id="logo" width="40" height="35" alt="Matias Stefanutti" src='/Icon2Small.png' />
      </a>
      </div>

      <div className={isNavExpanded ? styles.navigationMenuExpanded : styles.navigationMenuHiden}>
        <ul>
          {/* <li> Home </li> */}
          <li  > <a href='#about'>About me</a> </li>
          <li> <a href='#jobs'>Work</a> </li>
          <li> <a href='#projects'>Projects</a> </li>
          <li> <a href='#contact'>Contact</a></li>
        </ul> 
      </div>

      <button className={styles.hamburger}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}>
        <Icon size="large" icon="menu" ></Icon>
      </button>     
  
    </nav>
  )
}
