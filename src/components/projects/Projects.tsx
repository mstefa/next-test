import React from 'react'
import styles from './projects.module.scss'
import MainProject from './MainProject';
import { getProjects } from '@/src/infrastructure/ProjectRepository';
import { SectionTitle } from '../atoms/section-title/SectionTitle';


export default function Projects() {

  const projects = getProjects();
  return (
    <section className={styles.projectsContainer}>
      <SectionTitle>Some Things I’ve Built</SectionTitle>
        {projects.map(project => {
        if (project.show && project.main) {
          return <MainProject key={project.id} project={project} ></MainProject>
        } 
      }
      )}
    </section>
  )
}
