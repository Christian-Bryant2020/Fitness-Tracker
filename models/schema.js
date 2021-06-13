const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercise = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: Number,
      },
      reps: {
        type: String,
        required: Number,
      },
      sets: {
        type: String,
        required: Number,
      },
      distance: {
        type: String,
        required: Number,
      },
      weight: {
        type: Number
      }
    }
  ]
});







const Workout = mongoose.model("Workout", exercise);

module.exports = Workout;