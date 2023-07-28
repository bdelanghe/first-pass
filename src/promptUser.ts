import inquirer from 'inquirer';
import { Resume, Skill, Evidence } from './interfaces';

export async function promptUser(): Promise<Resume> {
  // Prompt user for basic info
  const basicInfo = await inquirer.prompt([
    { name: 'fullName', message: 'Full Name:' },
    { name: 'email', message: 'Email:' },
    { name: 'phoneNumber', message: 'Phone Number:' }
  ]);

  // Initialize empty skills and evidence arrays
  const skills: Skill[] = [];
  const evidence: Evidence[] = [];

  // Prompt user to add skills
  let addMoreSkills = true;
  while (addMoreSkills) {
    const skill = await inquirer.prompt([
      { name: 'name', message: 'Skill Name:' },
      { name: 'proficiency', message: 'Proficiency:' },
      { name: 'experience', message: 'Years of Experience:' },
      { name: 'evidence', message: 'Related Evidence (Input the indexes of the evidence separated by commas):' }
    ]);
    skills.push(skill);
    const { moreSkills } = await inquirer.prompt([{ name: 'moreSkills', message: 'Add more skills?', type: 'confirm' }]);
    addMoreSkills = moreSkills;
  }

  // Prompt user to add evidence
  let addMoreEvidence = true;
  while (addMoreEvidence) {
    const evidenceStory = await inquirer.prompt([{ name: 'story', message: 'Evidence:' }]);
    evidence.push(evidenceStory);
    const { moreEvidence } = await inquirer.prompt([{ name: 'moreEvidence', message: 'Add more evidence?', type: 'confirm' }]);
    addMoreEvidence = moreEvidence;
  }

  return {
    fullName: basicInfo.fullName,
    contactInformation: {
      email: basicInfo.email,
      phoneNumber: basicInfo.phoneNumber
    },
    skills,
    evidence
  };
}
