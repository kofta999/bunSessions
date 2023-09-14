import express from "express";
import session from "express-session";
import storeFunc from "connect-mongodb-session";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { authRouter } from "./routes/auth";
import flash from "connect-flash"

const app = express();
const MongoDBStore = storeFunc(session);
const store = new MongoDBStore({
  uri: Bun.env.DATABASE_URI!,
  collection: "sessions",
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: Bun.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(flash())

app.use("/", authRouter);

mongoose
  .connect(Bun.env.DATABASE_URI!)
  .then(() => app.listen(3000, () => console.log("Connected on port 3000")))
  .catch((err) => console.log(err));
