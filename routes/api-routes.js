const app = require("express").Router()
const mongojs = require("mongojs");
let db = require("../models");

app.post("/api/workouts", (req, res) => { //create
    console.log(req.body);

    db.Exercise.create(req.body, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

app.get("/api/workouts", (req, res) => { //grab from db
    db.Exercise.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

app.get("/api/workouts/range", (req, res) => {
    db.Exercise.find({}, (error, data) => {

        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    }
    );
}); // LESSON look at the api.js and both gets have same structure...... question are all the gets the same structure

app.put("/api/workouts/:id", (req, res) => { //edit/update
    db.Exercise.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $push: {
                exercises: req.body
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});


module.exports = app