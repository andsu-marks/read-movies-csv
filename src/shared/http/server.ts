import "reflect-metadata";
import express, { Router } from "express";
import "express-async-errors";
import cors from "cors";
import "dotenv/config"
import { insertData } from "@/csv/inserData"
import moviesRouter from "@/routes/movies.routes";

const PORT = process.env.PORT;

const app = express();
const routes = Router();

app.use(cors());
app.use(express.json());
routes.use(moviesRouter);
app.use(routes);

insertData();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
