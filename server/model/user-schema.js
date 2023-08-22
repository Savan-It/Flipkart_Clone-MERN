import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 20
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 20
    },
    username:{
        type: String,
        required: true,
        trim: true,
        min: 4,
        index: true,
        unique: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true
    }, 
    phone:{
        type: String,
        required: true,
        unique: true
    },

})

const user = mongoose.model('user', userSchema);

export default user; 