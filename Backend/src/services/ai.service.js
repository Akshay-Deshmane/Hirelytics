const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const {
  zodTOJsonSchema,
  default: zodToJsonSchema,
} = require("zod-to-json-schema");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .min(0)
    .max(100)
    .describe(
      "A score between 0 and 100 indicating how well the candidate's profile matches the job description",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this qeustion, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe(
      "Technical question that can be asked in the interview along with their intention and how to answer them",
    ),
  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The behaviroal question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this qeustion, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe(
      "Behavioral question that can be asked in the interview along with their intention and how to answer them",
    ),
  skillGaps: z
    .array(
      z.object({
        skill: z.string().describe("The skill which the candidates is lacking"),
        severity: z
          .enum(["low", "medium", "high"])
          .describe(
            "The severity of this skill gap, i.e how important to there skills",
          ),
      }),
    )
    .describe(
      "List of skill gaps in the candidate's profile along with their serverity",
    ),
  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe("The day number in the preparation plan starts from 1"),
        focus: z
          .string()
          .describe(
            "The main focus of this day in the preparation plan e.g data structure, system design, mock interview, apptitude",
          ),
        tasks: z
          .array(z.string())
          .describe(
            "List of tasks to be done on this day to follow the preparation plan, e.g read a specfic doucment, or aritcle, and blog",
          ),
      }),
    )
    .describe(
      "The day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively",
    ),
  title: z
    .string()
    .describe(
      "The title of the job for which the interview report is generated",
    ),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const prompt = `
You are an AI interview preparation assistant.
Analyze the candidate resume, self description, and job description.
Return ONLY valid JSON.

Follow the EXACT structure below.

Do NOT include explanations.
Do NOT include markdown.

Structure:
{
  "matchScore": number,
  "technicalQuestions": [
    {
      "question": string,
      "intention": string,
      "answer": string
    }
  ],
  "behavioralQuestions": [
    {
      "question": string,
      "intention": string,
      "answer": string
    }
  ],
  "skillGaps": [
    {
      "skill": string,
      "severity": "low" | "medium" | "high"
    }
  ],
  "preparationPlan": [
    {
      "day": number,
      "focus": string,
      "tasks": string[]
    }
  ]
}

Example Output:

{
  "matchScore": 85,
  "technicalQuestions": [
    {
      "question": "Explain how JWT authentication works.",
      "intention": "Check understanding of authentication systems.",
      "answer": "Explain token creation, payload, signature, and verification."
    }
  ],
  "behavioralQuestions": [
    {
      "question": "Tell me about a time you optimized system performance.",
      "intention": "Assess real-world problem solving.",
      "answer": "Use the STAR method."
    }
  ],
  "skillGaps": [
    {
      "skill": "System Design",
      "severity": "medium"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "Backend Fundamentals",
      "tasks": [
        "Review Node.js architecture",
        "Practice REST API design"
      ]
    }
  ]
}

Candidate Resume:
${resume}

Candidate Self Description:
${selfDescription}

Job Description:
${jobDescription}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseJpnsSchema: zodToJsonSchema(interviewReportSchema),
    },
  });

  return JSON.parse(response.text);
}

module.exports = generateInterviewReport;
