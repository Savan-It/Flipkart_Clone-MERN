import mongoose from 'mongoose'

const connection = async (userName, password) =>{
    const URL = `mongodb+srv://${userName}:${password}@flipkart-clone.oblbynd.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{ useUnifiedTopology:true, useNewUrlParser: true})
        console.log("Database successfully Connected!!");
        
    } catch (error) {
        console.log(`Error while connecting with databse :`, error.message);
    }
}

export default connection;