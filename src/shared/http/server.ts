import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";
import "dotenv/config"
import { insertData } from "../../inserData"

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

insertData();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
