import React from 'react'
import styles from './presentation.module.scss' 
import { Icon } from '../icon/Icon'

export default function Presentation() {
  return (
    <section className={styles.container } >
      <h1>Matías Stefanutti</h1>
      <h3>Software Engineer</h3>
      <div className={styles.arrow}><a href='#about'><Icon icon='chevronDown' size='large'></Icon></a> </div>

    </section>
  )
}
