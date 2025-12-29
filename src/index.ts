// index.ts
import express from "express";
import { middleware, middlewareLog } from "#middlewares/middlewares.js";

const app = express();
const port = process.env.PORT ?? "9001";

app.use(middlewareLog);
app.get("/", middleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
