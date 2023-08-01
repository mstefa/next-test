import React from 'react'
import styles from './contact.module.scss'
import { Icon } from '../icon/Icon'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 id='contact'> Get In Touch</h2>
      <div className={styles.contactContainer}>
        <p> Whether you have a question or just want to say hi, feel free to send me an email:</p>
        <a href='mailto:mstefanutti24@gmail.com' target="blank" > 
          <i className={styles.emailIcon} > <Icon size="small" icon="email"></Icon> </i> mstefanutti24@gmail.com 
        </a>
        <p>or follow me in any social network:</p>
        <div>
          <a href='https://www.linkedin.com/in/matiasstefanutti/' target="blank" >
            <i>  <Icon size="large" icon="linkedin"></Icon></i>
          </a>
          <a href='https://github.com/mstefa' target="blank" >
            <i> <Icon size="large" icon="github"></Icon></i>
          </a>
          <a href='https://twitter.com/mstefanutti' target="blank" > <i> <Icon size="large" icon="twitter"></Icon></i> </a>
        </div>
      </div>
    </section>
  )
}
