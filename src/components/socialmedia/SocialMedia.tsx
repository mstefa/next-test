import React from 'react'
import styles from './styledSocialMedia.module.scss'
// import Image from 'next/image'
import { Icon } from '../icon/Icon'
// import { linkedin } from '@/src/resources/icons'

export default function SocialMedia() {
  return (
    <nav className={styles.socialMediaNav}>
      <ul>

        <li> <a href='https://github.com/mstefa' target="blank" > <Icon size="medium" icon="linkedin"></Icon> </a>  </li>
        <li> <a href='https://github.com/mstefa' target="blank" > <Icon size="medium" icon="github"></Icon> </a>  </li>
        <li> <a href='https://twitter.com/mstefanutti' target="blank" > <Icon size="medium" icon="twitter"></Icon> </a>  </li>
        <li> <div className={styles.line}></div> </li>
      </ul>

    </nav>
  )
}
