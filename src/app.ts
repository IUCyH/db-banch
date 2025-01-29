import express from "express";
import userRouter from "./userRouter";

const app = express();

app.use("/users", userRouter);

const port = 8080;
const host = "0.0.0.0";
app.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});