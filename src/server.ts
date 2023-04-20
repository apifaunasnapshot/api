import express from "express";
import dataBase from "./config/dbConnect";

dataBase.on("error", console.log.bind(console, "connection error"));
dataBase.once("open", () => {
  console.log("successful connection to the database");
});

const app = express();

const port = 8000;

app.listen(port, () => console.log(`http://localhost:${port}`));
