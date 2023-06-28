const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://nimble2905:VisionVault2905@cluster1.up0k3aw.mongodb.net/VisionVault?retryWrites=true&w=majority";

const connectToMongo = async()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected Successfully to Mongodb Database");
    } catch (error) {
        console.log("Error connecting to mongo", error.message)
    }
}

module.exports = connectToMongo;