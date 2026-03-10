const mongoose = require("mongoose")



async function connectToDB() {
    
    try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log("server is connected to DB successfully")
    }
    catch{
      console.log("server is not conncected to DB due to some error")
    }

}


module.exports = connectToDB



