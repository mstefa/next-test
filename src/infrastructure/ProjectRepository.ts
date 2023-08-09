import projectData from "../../data/projectsData.json";
import Project from "../domain/Project";

export function getProjects(): Project[] {
  return projectData.projects as any as Project[];
}
