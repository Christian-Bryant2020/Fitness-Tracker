const router = require("express").Router();
const Workout = require("../models/fitnessSchema.js");
const { db } = require("../models/fitnessSchema.js");

router.put("/api/workouts/:id",(req, res) => {
    Workout.findByIdAndUpdate(req.params.id,body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workout", (req, res) => {
  console.log(req.body)
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range",(req,res) => {
  Workout.find().limit(7)
  .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts",(req,res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

module.exports = router;