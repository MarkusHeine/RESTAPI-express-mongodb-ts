import express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const subscribersRouter = require("./Routes/subscriberRoutes");

const { DB_URL } = process.env;

mongoose.connect(
    DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error: any) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log("conntected to db");
        }
    }
);

app.use(express.json());
app.use(bodyParser.json());

app.use("/subscribers", subscribersRouter);

app.listen(3000, () => {
    console.log("Listening on 3000");
});
