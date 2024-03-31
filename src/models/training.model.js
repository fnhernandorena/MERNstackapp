import mongoose from "mongoose";

const trainingSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    chest: {
        type: Boolean,
        default: false
    },
    back: {
        type: Boolean,
        default: false
    },
    legs: {
        type: Boolean,
        default: false
    },
    biceps: {
        type: Boolean,
        default: false
    },
    triceps: {
        type: Boolean,
        default: false
    },
    shoulders: {
        type: Boolean,
        default: false
    },
    date:{
        type:Date,
default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
}, {
    timestamps:true,
});

export default mongoose.model('Training', trainingSchema);