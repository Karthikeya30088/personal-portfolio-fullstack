const express = require("express");

const router = express.Router();

const db = require("../db");

router.post("/", (req, res) => {

    console.log(req.body);

    const { name, email, message } = req.body;

    const sql =
    "INSERT INTO contacts(name, email, message) VALUES (?, ?, ?)";

    db.query(

        sql,

        [name, email, message],

        (err, result) => {

            if (err) {

                console.log(err);

                res.status(500).send("Database Error");

            } else {

                res.send("Message Sent Successfully");

            }

        }

    );

});

module.exports = router;