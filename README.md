# Hirelytics => (AI-Powered Resume Analysis & Interview Preparation Platform)

A powerful **AI-driven career intelligence system** built using **Node.js, Express, MongoDB, and React**, designed to analyze resumes, detect skill gaps, and generate **personalized interview preparation plans along with optimized resume PDFs**.

This project demonstrates how modern systems can integrate **LLMs (AI models), backend engineering, and real-world workflows** to simulate a **smart hiring assistant**.

---

## Overview =>

Hirelytics is a full-stack system that simulates an **AI-powered recruitment intelligence engine**, responsible for managing:

* Resume analysis (PDF parsing)
* Skill gap detection
* Interview question generation
* Personalized preparation roadmap
* AI-generated resume optimization

It leverages :-

* **Google Gemini AI** for intelligent resume analysis and structured output generation
* **MongoDB (Mongoose)** for storing interview reports and user data
* **JWT Authentication** for secure user access
* **Puppeteer** for generating optimized resumes in PDF format
* **Zod Validation** to enforce structured AI responses
* **Express.js** for scalable REST API design
* **React.js** for modular frontend architecture

It solves a key problem in modern job preparation systems :-

> *Providing personalized, structured, and actionable insights from resumes instead of generic career advice*

Hirelytics ensures that **every user gets a tailored roadmap to improve their chances of getting hired**.

---

## Features =>

* AI-powered resume analysis using LLMs
* Match score generation (0–100 based on job fit)
* Technical interview questions with answers & intent
* Behavioral interview questions with strategy
* Skill gap detection with severity levels
* Day-wise preparation roadmap (3–5 days)
* AI-generated optimized resume (PDF format)
* Secure JWT-based authentication system
* Token blacklisting for logout security
* Resume upload & parsing (PDF support)
* Protected routes using authentication middleware
* Modular MVC backend architecture
* Feature-based scalable frontend architecture

---

## Project Architecture =>

```
Client (React Frontend)
        ↓
User Inputs (Resume + Job Description + Self Description)
        ↓
HTTP Requests (Auth / Interview APIs)
        ↓
Express Server
        ↓
Routes → Controllers
        ↓
Authentication Middleware (JWT Verification)
        ↓
File Upload Middleware (Multer)
        ↓
Business Logic:
   - Resume Parsing (PDF → Text)
   - AI Processing (LLM Analysis)
        ↓
AI Service Layer:
   - Interview Report Generation
   - Resume Optimization (HTML → PDF)
        ↓
Database Layer (MongoDB via Mongoose)
        ↓
Models:
   - User
   - Interview Report
   - Blacklist (Token Security)
        ↓
Response (JSON Data / PDF File)
```

---

## Tech Stack =>

| Technology        | Purpose             |
| ----------------- | ------------------- |
| Node.js           | Runtime environment |
| Express.js        | Backend framework   |
| MongoDB           | Database            |
| Mongoose          | ODM for MongoDB     |
| React.js          | Frontend UI         |
| React Router      | Client-side routing |
| Context API       | State management    |
| Google Gemini API | AI processing       |
| Zod               | Schema validation   |
| Multer            | File uploads        |
| pdf-parse         | Resume parsing      |
| Puppeteer         | PDF generation      |
| JSON Web Token    | Authentication      |
| bcryptjs          | Password hashing    |
| cookie-parser     | Cookie handling     |
| dotenv            | Environment config  |

---

## Installation & Setup =>

```bash
# Clone the repository
git clone https://github.com/Akshay-Deshmane/hirelytics.git

# Navigate to project directory
cd hirelytics
```

---

### Setup Environment Variables =>

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=Gemini_api_key
```

---

### Run the Server (Backend) =>

```bash
cd Backend
npm install
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

### Run Frontend =>

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Workflow Of Hirelytics =>

### 1. User Registration :-

* User provides credentials
* Password is hashed using bcrypt
* User stored in database

---

### 2. User Login :-

* User authenticates using credentials
* JWT token is generated
* Token stored in cookies
* Used for accessing protected APIs

---

### 3. Resume Upload & Processing :-

* User uploads resume (PDF)
* File handled using Multer
* Resume text extracted using pdf-parse

---

### 4. AI Analysis :-

* Resume + self description + job description sent to AI
* AI generates structured JSON output:

  * Match score
  * Technical questions
  * Behavioral questions
  * Skill gaps
  * Preparation plan

---

### 5. Interview Report Generation :-

* AI response stored in database
* Linked to user account
* Can be fetched anytime

---

### 6. Resume Optimization :-

* AI generates resume in HTML format
* Puppeteer converts HTML → PDF
* User downloads optimized resume

---

### 7. Access Protected Routes :-

```js
Authorization: Cookie (JWT Token)
```

* Middleware verifies token
* Grants access to secured endpoints

---

### 8. Logout & Security :-

* Token added to blacklist
* Prevents reuse of invalidated tokens

---

## API Endpoints =>

### Auth Routes

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register user    |
| POST   | /api/auth/login    | Login user       |
| GET    | /api/auth/logout   | Logout user      |
| GET    | /api/auth/get-me   | Get current user |

---

### Interview Routes (Protected)

| Method | Endpoint                      | Description               |
| ------ | ----------------------------- | ------------------------- |
| POST   | /api/interview/               | Generate interview report |
| GET    | /api/interview/               | Get all reports           |
| GET    | /api/interview/report/:id     | Get report by ID          |
| POST   | /api/interview/resume/pdf/:id | Generate resume PDF       |

---

## Key Engineering Concepts =>

### 1. AI-Driven System Design :-

* Uses structured prompts to enforce JSON output
* Validates AI responses using Zod schemas
* Ensures consistent and reliable results

---

### 2. Resume Intelligence Engine :-

* Combines resume + job description + self profile
* Generates contextual insights instead of generic responses

---

### 3. Authentication & Security :-

* JWT-based authentication
* Password hashing using bcrypt
* Token blacklisting for logout security

---

### 4. File Processing Pipeline :-

* PDF upload → Text extraction → AI processing
* Demonstrates real-world document handling system

---

### 5. Modular Backend Architecture :-

* Separation of concerns:

  * Routes → Controllers → Services → Models
* Improves scalability and maintainability

---

### 6. AI + Backend Integration :-

* Integrates LLM responses into backend workflow
* Converts AI output into structured application data

---

## Project Structure =>

```
Hirelytics/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── interview.controller.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   └── file.middleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   ├── interviewReport.model.js
│   │   │   └── blacklist.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── interview.route.js
│   │   │
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   │   └── Protected.jsx
│   │   │   │   ├── pages/
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   └── Register.jsx
│   │   │   │   └── auth.context.jsx
│   │   │   │
│   │   │   └── interview/
│   │   │       ├── pages/
│   │   │       │   ├── Home.jsx
│   │   │       │   └── Interview.jsx
│   │   │       └── interview.context.jsx
│   │   │
│   │   ├── app.routes.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Example Usage =>

```
POST /api/interview/

Request:
FormData:
  resume: (PDF File)
  selfDescription: "I am a backend developer..."
  jobDescription: "Looking for a Node.js developer..."

Response:
{
  "matchScore": 82,
  "skillGaps": [...],
  "preparationPlan": [...]
}
```

---

## Limitations Of Hirelytics =>

* AI output may vary depending on prompt quality
* No real-time interview simulation
* No role-based access control (RBAC)
* No rate limiting implemented
* No multi-language support

---

## Future Enhancements / Future Scope =>

* AI mock interview (voice/video)
* Real-time feedback system
* Resume analytics dashboard
* Company-specific preparation plans
* Role-Based Access Control (RBAC)
* Rate limiting & API security improvements
* Docker & cloud deployment (AWS/GCP)
* Mobile responsiveness

---