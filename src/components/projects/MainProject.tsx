import React, { FunctionComponent } from 'react'
import styles from './mainProject.module.scss'
import Project from '@/src/domain/Project'

interface MainProjectProps{
  project: Project
}

const MainProject: FunctionComponent<MainProjectProps> = (props) =>{
  const project = props.project;
  return (
    <div id={project.id} className={styles.mainProject}>
      <></>
      {project.page
        ? <a href={project.page} target="blank" > <h3>{project.name} </h3> </a>
        : project.repository
        ? <a href={project.repository} target="blank" > <h3>{project.name} </h3> </a>
        : <h3>{project.name} </h3>
      }
      <div className='img-contanier'>
        <img src={process.env.PUBLIC_URL + project.img} alt='project cover'></img>
      </div>

      <div className='text-container'>
        <p> {project.description} </p>
        <ul>
          {project.technologies.map((tec) => <li key={tec}>{tec}</li>)}
        </ul>
        {project.repository ? <a href={project.repository} target="blank" > <i> g</i>     </a> : <></>}
        {project.page ? <a href={project.page} target="blank" > <i>l</i> </a> : <></>}
      </div>

    </div>
  )
}

export default MainProject
