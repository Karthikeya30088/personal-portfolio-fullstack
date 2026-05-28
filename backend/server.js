const express = require("express");

const cors = require("cors");

require("dotenv").config();

const app = express();

/* DATABASE CONNECTION */

const db = require("./db");

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* ROUTES */

const projectRoutes = require("./routes/projectRoutes");

const contactRoutes = require("./routes/contactRoutes");

/* API ROUTES */

app.use("/projects", projectRoutes);

app.use("/contact", contactRoutes);

/* HOME ROUTE */

app.get("/", (req, res) => {

    res.send("Portfolio Backend Running");

});

/* SERVER */

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});