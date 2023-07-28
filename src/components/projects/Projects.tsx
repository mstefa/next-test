import React from 'react'
import styles from './projects.module.scss'
import MainProject from './MainProject';
import { getProjects } from '@/src/infrastructure/ProjectRepository';


export default function Projects() {

  const projects = getProjects();
  return (
    <div className={styles.projectsContainer}>
      <h2 id='projects'>Some Things I’ve Built</h2>
      {projects.map(project => {
        if (project.show && project.main) {
          return <MainProject key={project.id} project={project} ></MainProject>
        } 
      }
      )}
    </div>
  )
}
