# Hirelytics

An AI-powered Resume Analysis platform that analyzes a user's resume and provides skill gap analysis, improvement suggestions, and a structured preparation roadmap for the desired job role.

The system uses AI models to evaluate resumes, identify missing skills, and generate a 3-day preparation plan with practice questions along with a new optimized resume tailored to the selected job title.

## Tech Stack

| Category        | Technologies                                                |
| --------------- | ----------------------------------------------------------- |
| **Frontend**    | React, Tailwind CSS                                         |
| **Backend**     | Convex (Real-time DB), Inngest (Background Jobs)            |
| **AI**          | Gemini 2.0 Flash (free tier)                                |
| **Auth**        | JWT , bcrypt                                                |
| **FileUpload**  | PDF Parser                                                  |
| **PDF Handling**| JWT , bcrypt                                                |


## features

👉 **PDF Upload & Ingestion**: Seamlessly upload PDF books with automated text extraction, intelligent chunking, and high-dimensional embeddings for precise context retrieval.

👉 **Skill Gap Detection**: The system compares the resume with industry expectations for the target job role and identifies:- 
        Missing skills
        Weak skill areas
        Outdated technologies
        Improvements needed.

👉 **Resume Improvement Suggestions**: Provides suggestions such as: - 
        Skills to add
        Better wording for projects
        Improved bullet points
        Better structure and formatting

👉 **AI Generated 3-Day Roadmap**: Based on missing skills, the system generates:-
        3-day learning roadmap
        Topics to learn
        Practice tasks
        Coding questions

👉 **Practice Interview Questions**: The system generates:-
        Technical questions
        Conceptual questions
        Coding problems
        System design basics

👉 **AI Resume Generator**: Generates an optimized resume tailored to a job title, such as:-
        Backend Developer
        Frontend Developer
        Full Stack Developer
        Node.js Developer

### Prerequisites

- Node.js 20.09+
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Akahay-Deshmane/Hirelytics.git
   cd Hirelytics
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.local
   ```