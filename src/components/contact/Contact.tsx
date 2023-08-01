import React from 'react'
import styles from './contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 id='contact'> Get In Touch</h2>
      <div className='contactContainer'>
        <p> Whether you have a question or just want to say hi, feel free to send me an email:</p>
        <a href='mailto:mstefanutti24@gmail.com' target="blank" > 
          <i>env</i> mstefanutti24@gmail.com 
        </a>
        <p>or follow me in any social network:</p>
        <div>
          <a href='https://www.linkedin.com/in/matiasstefanutti/' target="blank" >
            <i> li</i>
          </a>
          <a href='https://github.com/mstefa' target="blank" >
            <i>g</i>
          </a>
          <a href='https://twitter.com/mstefanutti' target="blank" > <i>t</i> </a>
        </div>
      </div>
    </div>
  )
}
