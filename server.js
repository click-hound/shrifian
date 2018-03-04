import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import Promise from "bluebird";
import morgan from "morgan";

import auth from "./express/routes/auth";
import users from "./express/routes/users";
import listings from "./express/routes/listings";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/listings", listings);
app.use(express.static(__dirname + "/build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(PORT, () => console.log("RUNNING ON PORT: " + process.env.PORT));
