import express from 'express';
import cors from 'cors';
import userDB from './api/users.js';

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/users", users)
app.use("*", (req, res) => res.status(404).json({error:"not found"}));

export default app;