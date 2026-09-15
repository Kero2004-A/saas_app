export { cn } from "cn"
import { subjectsColors, voices } from "@/constants";
export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};