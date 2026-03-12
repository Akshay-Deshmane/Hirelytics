const multer = require("multer")

const storage =  multer.memoryStorage() ;
const upload = multer({
    storage : storage,
    limits : {
        fileSize : 3 * 1024 * 1024 // max size of pdf is 3MB
    },
     fileFilter(req, file, cb) {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files allowed"))
    }
    cb(null, true)
}
})





module.exports = upload

