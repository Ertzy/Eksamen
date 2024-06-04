const express = require('express');
const mongoose = require('mongoose')
//const userRouter = require('./routes/userRouter')
const cookieParser = require('cookie-parser');
//const { requireAuth, checkUser } = require("./middelware/authMiddelware");
const cors = require('cors')
const bodyParser = require('body-parser')
const visualRouter = require('./routes/visualRouter')
const mongo = "mongodb://10.12.8.47:27017/?directConnection=true&appName=mongosh+2.1.5";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());



mongoose.connect(mongo)
    .then((result) => {app.listen(6969); 
    console.log('Connected to MongoDB and running on port 6969')})


// routes
// app.get('*', checkUser);
// app.get('/', (req, res) => res.render('index'));
// app.get('/test', requireAuth, (req, res) => res.render('test'));

app.use(visualRouter)
// app.use(userRouter)