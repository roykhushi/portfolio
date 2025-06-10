import mongoose, { mongo } from "mongoose";

const MessageSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});


export const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);