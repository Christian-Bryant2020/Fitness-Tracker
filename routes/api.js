const router = require("express").Router();
const Workout = require("../models/fitnessSchema.js");

router.put("/api/workouts/:id",({body}) => {
    Workout.findByIdAndUpdate(req.params.id,body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
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