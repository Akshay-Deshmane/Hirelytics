const express = require("express")
const authMiddelware = require("../middleware/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../middleware/file.middleware")


const interViewRouter = express.Router()

/**
 * @route POST /api/interview/
 * @description genearte new interview report on the basis of user self description,
 * resume pdf and job description
 * @access private
 */

// interViewRouter.post("/", authMiddelware.authUser, upload.single("resume"), interviewController.generateInterViewReportController)

interViewRouter.post(
  "/",
  authMiddelware.authUser,
  upload.single("resume"),
  (req, res) => {

    console.log("FILE:", req.file)
    console.log("BODY:", req.body)

    res.json({
      file: req.file,
      body: req.body
    })
  }
)





module.exports = interViewRouter




