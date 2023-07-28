export default interface Project {
  id: string,
  name: string,
  description: string,
  technologies: string[],
  img: string,
  repository: string,
  page?: string,
  year: number,
  main: boolean,
  show: boolean
}

