import express, { static } from "express";
import { join } from "path";

let initial_path = join(__dirname, "public");

const app = express();

app.use(static(initial_path));

app.get("/", (req, res) => {
  res.sendFile(join.apply(initial_path, "home.html"));
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
