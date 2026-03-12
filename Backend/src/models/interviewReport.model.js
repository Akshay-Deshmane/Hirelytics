const mongoose = require("mongoose") 


/**
 * - job description : String
 * - resume text : String
 * - Self description : String
 * 
 * - matchScore : Number 
 * 
 * - Technical question : [{
 *       question : "",
 *       intention : "",
 *       answer : ""
 *       }]
 * 
 * - Behavioral question : [{
 *      question : "",
 *      intention : "",
 *      answer : ""  
 *      }]
 * 
 * - Skills gap : [{
 *       Skill : "",
 *       soverity : {
 *       type : String, 
 *       enum : ["low", "medium", "high"]
 *       }  
 *       }]
 * 
 * - Preparation plan : [{
 *       day : Number,
 *       focus : String,
 *       tasks : [String] 
 *       }]
 */



const technicalQuestionSchema = new mongoose.Schema({
    question : {
        type : String,
        required : [true, "Technical Question is required"]
    },
    intention : {
        type : String,
        required : [true, "Intention is required"]
    },
    answer : {
        type : String,
        required : [true, "Answer is required"]
    }
}, {
    _id : false
})



const behavioralQuestionSchema = new mongoose.Schema({
    question : {
        type : String,
        required : [true, "Behavioral Question is required"]
    },
    intention : {
        type : String,
        required : [true, "Intention is required"]
    },
    answer : {
        type : String,
        required : [true, "Answer is required"]
    }
}, {
    _id : false
})



const skillGapSchema = new mongoose.Schema({
    skill : {
        type : String, 
        required : [true, "Skill is required"]
    },
    serverity : {
        type : String,
        enum : ["low", "medium", "high"],
        required : [true, "Severity is required"]
    }
}, {
    _id : false
})



const preparationPlanSchema = new mongoose.Schema({
    day : {
        type : Number,
        required : [true, "Day is required"]
    },
    focus : {
        type : String,
        required : [true, "Focus is required"]
    },
    tasks : [{
        type : String,
        required : [true, "Task is required"]
    }]
})



const interviewReportSchema = new mongoose.Schema({
    jobDescription : {
        type : String,
        required : [true, "Job Description is required"]
    },
    resume : {
        type : String, 
    },
    selfDescription : {
        type : String,
    },
    matchScore : {
        type : Number,
        min : 0,
        max : 100,
    },
    technicalQuestions : [ technicalQuestionSchema ],
    behavioralQuestions : [ behavioralQuestionSchema ],
    skillGaps : [ skillGapSchema ],
    preparationPlan : [ preparationPlanSchema ],
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    }
    
}, {
    timestamps : true
})


const interviewReportModel = mongoose.model("InterViewReport", interviewReportSchema);

module.exports = interviewReportModel;

