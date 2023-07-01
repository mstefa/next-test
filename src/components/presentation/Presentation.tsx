import React from 'react'
import styles from './presentation.module.scss' 

export default function Presentation() {
  return (
    <section className={styles.container } >
      <span>Hi, my name is</span>
      <h1>Matías Stefanutti.</h1>
      {/* <span>I am a</span> */}
      <h3>Full Stack Developer</h3>

    </section>
  )
}
