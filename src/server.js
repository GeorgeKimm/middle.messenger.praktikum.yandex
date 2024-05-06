import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "dist")));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
