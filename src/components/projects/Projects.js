import React from 'react'
import {StyledProjects} from './StyledProjects'
import MainProject from './MainProject';

import data from "../../data.json";


export default function Projects() {
  return (
    <StyledProjects>
      <h2 id='projects'> <i class="far fa-paper-plane"></i> Some Things I’ve Built</h2>
      {data.projects.map(project => {
        if(project.show && project.main){
          return <MainProject project = {project} ></MainProject> 
        }else{
          return <></>
        }        
      }
      )}
    </StyledProjects>
  )
}
