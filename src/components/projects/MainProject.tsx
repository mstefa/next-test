import React, { FunctionComponent } from 'react'
import styles from './mainProject.module.scss'
import Project from '@/src/domain/Project'
import { Icon } from '../icon/Icon'

interface MainProjectProps{
  project: Project
}

const MainProject: FunctionComponent<MainProjectProps> = (props) =>{
  const project = props.project;
  return (
    <div id={project.id} className={styles.mainProject}>
      {project.page
        ? <a href={project.page} target="blank" > <h3>{project.name} </h3> </a>
        : project.repository
        ? <a href={project.repository} target="blank" > <h3>{project.name} </h3> </a>
        : <h3>{project.name} </h3>
      }
      <div className={styles.imgContainer}>
        <img src={project.img} alt={`${project.name} cover image`}></img>
      </div>

      <div className={styles.textContainer}>
        <p> {project.description} </p>
        <ul>
          {project.technologies.map((tec) => <li key={tec}>{tec}</li>)}
        </ul>
        {project.repository ? <a href={project.repository} target="blank" > <i> <Icon size="small" icon="linkedin"></Icon> </i>     </a> : <></>}
        {project.page ? <a href={project.page} target="blank" > <i> <Icon size="xl" icon="linkedin"></Icon></i> </a> : <></>}
      </div>

    </div>
  )
}

export default MainProject
