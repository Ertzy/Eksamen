const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require("./middelware/authMiddelware");

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");

const dbURL = "mongodb://10.12.8.47:27017/?directConnection=true&appName=mongosh+2.1.5"
mongoose.connect(dbURL, {})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));



// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('index'));
app.use(authRoutes)
