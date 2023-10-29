const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const cors = require("cors");

//////////database creation//////////// this goes first!
dotenv.config();  //DO NOT REMOVE THIS FROM UP TOP
const url = process.env.MONGO_DB_URL
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
//middleware//
// app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(express.json());

///////origin headers///////////////
////////////routes////////////////////
const routes = require('../backend/routes/api/users.js');
app.use('/api/users', routes);


////////////port///////////////////////
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on ${port}`))