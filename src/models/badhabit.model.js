import mongoose from "mongoose";

const badHabitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    times: {
        type: [Number]
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export default mongoose.model('BadHabit', badHabitSchema);