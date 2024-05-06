import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, "..", "dist")));
app.use("/*", (__req, res) => {
  res.sendFile(join(__dirname, "..", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
