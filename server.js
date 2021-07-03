const express = require("express");
const mongoose = require("mongoose");
//import config from "config";
const dotenv = require("dotenv");
const app = express();

//////////database creation////////////
dotenv.config();  //DO NOT REMOVE THIS FROM UP TOP
const url = process.env.MONGO_URL
const connectDB = async () => {
    try {
        await mongoose.connect(
            url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                useFindAndModify: false
            }
        );
        console.log('MongoDB is connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();

////////////middleware////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

////////////routes////////////////////
//app.get('/', (req, res) => res.send('Hello!'));
const routes = require('./routes/api/users.js');
app.use('/api/users', routes);

////////////port///////////////////////
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on ${port}`))