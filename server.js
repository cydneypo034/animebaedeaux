const express = require("express");
const mongoose = require("mongoose");
//import config from "config";
const dotenv = require("dotenv");
const app = express();
const path = require("path");

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

/////////////heroku build/////////////

//__dirname = path.resolve();
//heroku static folder
if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get('*',(req, res) => {
        res.sendFile(path.join(__dirname, 'client' , 'build', 'index.html'));
        //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    })
}else {
    app.get("/", (req, res) => {
        res.send("API is running..")
    })
}

////////////middleware////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///////origin headers///////////////
////////////routes////////////////////
//app.get('/', (req, res) => res.send('Hello!'));
const routes = require('./routes/api/users.js');
app.use('/api/users', routes);

////////////port///////////////////////
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on ${port}`))