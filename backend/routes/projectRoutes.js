const express = require("express");

const router = express.Router();

const db = require("../db");

/* GET PROJECTS */

router.get("/", (req, res) => {

    const sql = "SELECT * FROM projects";

    db.query(sql, (err, result) => {

        if (err) {

            console.log(err);

            res.status(500).send("Database Error");

        } else {

            res.json(result);

        }

    });

});

/* INSERT PROJECT */

router.post("/", (req, res) => {

    const { title, description, technology } = req.body;

    const sql =
    "INSERT INTO projects(title, description, technology) VALUES (?, ?, ?)";

    db.query(

        sql,

        [title, description, technology],

        (err, result) => {

            if (err) {

                console.log(err);

                res.status(500).send("Insert Error");

            } else {

                res.send("Project Added Successfully");

            }

        }

    );

});

module.exports = router;