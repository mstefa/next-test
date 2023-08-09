import jobsData from "../../data/jobsData.json";
import JobData from "../domain/Job";

export function getJobs(): JobData[] {
  return jobsData as any as JobData[];
}
