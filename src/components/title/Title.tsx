import React from 'react'
// import { StyledHome } from './StyledHome'
import styles from './title.module.css' 

export default function Title() {
  return (
    <section className={styles.title } >
      <span className={styles.spantitle} >Hi, my name is</span>
      <h1 className={styles.h1title}>Matías Stefanutti.</h1>
      {/* <span>I am a</span> */}
      <h3 className={styles.h3title} >Full Stack Developer</h3>

    </section>
  )
}
