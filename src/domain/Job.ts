export default interface JobData {
  id: string,
  company: string,
  title: string,
  companyWebSite: string,
  timeRange: string,
  shortDescription: string,
  itemsDescriptions: jobItemsDescriptions[],
  usedSkills: techSkills[]
}

interface techSkills {
  name: string
}

interface jobItemsDescriptions {
  name: string
}
