import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import weatherRouter from "./routes/routs.js";

const app = express();
app.use(cors());
dotenv.config();


const port = process.env.PORT || 3000;

app.use("/",weatherRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
