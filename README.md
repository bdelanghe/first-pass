# 🚀 first-pass 📝

`first-pass` is a super-helpful, friendly CLI tool that makes crafting your resume a total breeze. With `first-pass`, you'll be able to align your skills with a job description, see how well they match, and even get guidance on creating evidence-based bullet points for your skills. In short, `first-pass` gives your resume the rocket fuel it needs to catch an employer's eye. 🎯

</div>

## 🛠️ Installation

First, you'll need to have Node.js installed on your machine to run this tool.

```bash
# 📦 Install pnpm if you haven't already
npm install -g pnpm

# 🧲 Clone the repository
git clone https://github.com/yourusername/first-pass.git
cd first-pass

# 🌱 Install the dependencies with pnpm
pnpm install
```

## 💼 Usage

You can run the tool using the following command:

```bash
pnpm run start
```

Here's what you can expect:

1. 📁 You'll be prompted to provide the path to your current resume JSON file and the job description JSON file.
2. 🎛️ The tool will then compare the two and display a mapping of how well your skills match the job requirements.
3. ✍️ Next, you'll be guided to create a new resume JSON. You can add your skills one by one, and you'll have the option to add evidence that backs up these skills.
4. 💾 Finally, your new evidence-based resume will be saved as `newResume.json`.

## 📄 JSON Formats

This tool uses the HR-JSON standard with some additions. Below are the required formats for the resume and job description JSON files.

**📚 Resume JSON format:**

```json
{
  "fullName": "John Doe",
  "contactInformation": {
    "email": "john.doe@example.com",
    "phoneNumber": "123-456-7890"
  },
  "skills": [
    {
      "name": "Python",
      "proficiency": "advanced",
      "experience": 5,
      "evidence": [0]
    }
  ],
  "evidence": [
    {
      "story": "Led a team to develop a Python-based web application..."
    }
  ]
}
```

**📝 Job Description JSON format:**

```json
{
  "jobTitle": "Software Developer",
  "company": "ABC Company",
  "location": "City, State",
  "skills": [
    {
      "name": "Python",
      "proficiency": "advanced",
      "experience": 3
    }
  ]
}
```
