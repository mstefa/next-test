import React from 'react'
import styles from './about.module.scss'
import { Icon } from '../icon/Icon'
import { SectionTitle } from '../atoms/section-title/SectionTitle'

export default function About() {
  return (
    <section className={styles.aboutSection} >
      <SectionTitle>About Me</SectionTitle>
      <div >
        <div className={styles.textContainer}>
          <p>
            I am an experienced Software Engineer, adept at creating exceptional platforms that offer exceptional user experiences. My expertise lies in backend development, where I&apos;ve utilized languages such as <b>TypeScript</b>, <b>GoLang</b>, and <b>Java </b> to architect innovative microservices. Additionally, I possess frontend proficiency with <b>React</b>. I&apos;m motivated for  elevate platform quality and performance while cultivating robust customer relationships through cutting-edge solutions.
          </p>
          <p>
            From my root as an aeronautical engineer, my journey has been a transformative one, molding me into a versatile Software Engineer. On my journey, I got the chance to dive into the role of a Teaching Assistant, mentoring emerging talents and guiding into the development world. My focus on effective leadership and ability to adapt to various cultures have consistently led to successful outcomes across a wide range of domains. 
            </p>
          <p>
            <b><a  href='https://www.linkedin.com/in/matiasstefanutti/' target="blank" >Let&apos;s connect </a></b> to explore new horizons and drive transformative tech solutions.
          </p>


        </div>
        <div className={styles.imgContainer}>
          <img src='./images/profilePic.webp' alt='profile'></img>
          <a href='https://drive.google.com/uc?export=download&id=1MefuFpnNeeRATLesxyDzKNAkfP0jxA_T' target="blank" > <button className='mainButton' >Resume</button> </a>

        </div>
      </div>

    </section>
  )
}
