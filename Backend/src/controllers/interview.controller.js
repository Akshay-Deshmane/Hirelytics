const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")



async function generateInterViewReportController(req, res) {

    console.log("Hi")
    console.log(req.headers)
console.log(req.file)
console.log(req.body)

    // const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
   

    const data = await pdfParse(req.file.buffer)
    const resumeText = data.text;

    console.log(resumeText);


    const { selfDescription, jobDescription } = req.body;

    if (!req.file) {
  return res.status(400).json({
    message: "Resume PDF is required"
  })
}

    const interViewReportByAi = await generateInterviewReport({
        resume : resumeContent.text,
        selfDescription,
        jobDescription
    })
    
    const interviewReport = await interviewReportModel.create({
        user : req.user.id,
        resume : resumeContent.text,
        selfDescription,
        jobDescription,
        ...interViewReportByAi
    })


    res.status(201).json({
        message : "Interview Report generated successfully",
        interviewReport
    })
}


module.exports = { generateInterViewReportController }