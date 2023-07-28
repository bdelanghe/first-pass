export interface ContactInformation {
  email: string;
  phoneNumber: string;
}

export interface Evidence {
  story: string;
}

export interface Skill {
  name: string;
  proficiency: string;
  experience: number;
  evidence: number[];
}

export interface Resume {
  fullName: string;
  contactInformation: ContactInformation;
  skills: Skill[];
  evidence: Evidence[];
}

export interface JobDescription {
  jobTitle: string;
  company: string;
  location: string;
  skills: Skill[];
}
