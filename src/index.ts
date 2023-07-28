import { readFileSync, writeFileSync } from 'fs';
import { promptUser } from './promptUser';
import { mapSkills } from './mapSkills';
import { JobDescription, Resume } from './interfaces';

const jobDescriptionPath = process.argv[2];
const resumePath = process.argv[3];

const jobDescription: JobDescription = JSON.parse(readFileSync(jobDescriptionPath, 'utf8'));
const resume: Resume = JSON.parse(readFileSync(resumePath, 'utf8'));

const result = mapSkills(jobDescription, resume);

console.log(result);

promptUser()
  .then((newResume: Resume) => {
    writeFileSync('newResume.json', JSON.stringify(newResume, null, 2));
    console.log('New resume created!');
  })
  .catch((error: any) => console.error(error));
