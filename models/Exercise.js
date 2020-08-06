const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: () => {
            new Date()
        }
    },
    exercises: [
        {
            type: { // gives more rules
                type: String, // 
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
}
);

ExerciseSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration; // where then is exercise taken from?
    }, 0);
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
