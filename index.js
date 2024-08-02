import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import projectRouter from './Router/porjectRoter.js'

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173","https://neon-flake-front-end.vercel.app"],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB Connected successfully');
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use('/', projectRouter);

const server = app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});
