import express from "express";
import mongoose from "mongoose";
import config from "config";
import dotenv from "dotenv";
const app = express();

//////////database creation////////////
dotenv.config();
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
app.get('/', (req, res) => res.send('Hello!'));

//port
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on ${port}`))