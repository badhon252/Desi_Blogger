import express from "express";
import { join } from "path";
import fileupload from "express-fileupload";

let initial_path = join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());
console.log(app);
app.get("/", (req, res) => {
  res.sendFile(join(initial_path, "home.html"));
});

app.get("/editor", (req, res) => {
  res.sendFile(join(initial_path, "editor.html"));
});

// upload link
app.post("/upload", (req, res) => {
  let file = req.files.image;
  let date = new Date();
  // image name
  let imagename = date.getDate() + date.getTime() + file.name;
  // image upload path
  let path = "public/uploads/" + imagename;

  // create upload
  file.mv(path, (err, result) => {
    if (err) {
      throw err;
    } else {
      // our image upload path
      res.json(`uploads/${imagename}`);
    }
  });
});

app.get("/:blog", (req, res) => {
  res.sendFile(join(initial_path, "blog.html"));
});

app.use((req, res) => {
  res.json("404");
});

app.listen("3000", () => {
  console.log("listening......");
});
