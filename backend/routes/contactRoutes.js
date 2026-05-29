const express = require("express");

const router = express.Router();

const db = require("../db");

/* SEND CONTACT MESSAGE */

router.post("/", (req, res) => {

    const { name, email, message } = req.body;

    console.log(req.body);

    const sql =
        "INSERT INTO contacts(name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                error: "Database Error"
            });

        }

        res.status(200).json({
            message: "Message Sent Successfully"
        });

    });

});

module.exports = router;
