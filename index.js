import express from "express";
import cors from "cors";
import projectRoter from './Router/porjectRoter.js'


const app = express();
const port = 4000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/", projectRoter);


 app.listen(port)