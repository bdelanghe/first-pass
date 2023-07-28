import { JobDescription, Resume, Skill } from './interfaces';

export function mapSkills(jobDescription: JobDescription, resume: Resume): { [key: string]: string } {
  const resultMap: { [key: string]: string } = {};

  jobDescription.skills.forEach((jdSkill) => {
    const resumeSkill = resume.skills.find((resSkill) => resSkill.name === jdSkill.name);
    if (!resumeSkill) {
      resultMap[jdSkill.name] = 'not matched';
    } else if (resumeSkill.proficiency === jdSkill.proficiency && resumeSkill.experience >= jdSkill.experience) {
      resultMap[jdSkill.name] = 'fully matched';
    } else {
      resultMap[jdSkill.name] = 'partially matched';
    }
  });

  return resultMap;
}
